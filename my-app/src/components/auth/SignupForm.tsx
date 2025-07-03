"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// Import fungsi-fungsi 
import { auth, db } from '@/lib/firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { FirebaseError } from 'firebase/app';

export default function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        if (password.length < 6) {
            setError("Password should be at least 6 characters long.");
            return;
        }

        try {
            // Buat user di Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // 1. Update profil di Firebase Auth (untuk nama tampilan)
            await updateProfile(user, {
                displayName: name,
            });

            // 2. Simpan data user di Firestore
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName: name,
                email: email,
            });

            alert("Akun berhasil dibuat! Mengarahkan ke Dashboard...");
            router.push('/dashboard');
        } catch (err) {
            if (err instanceof FirebaseError) {
                if (err.code === 'auth/email-already-in-use') {
                    setError("This email is already registered.");
                } else {
                    setError("An error occurred. Please try again.");
                }
            }
            console.error("Signup Error:", err);
        }
    };

    return (
        <form onSubmit={handleSignup} className="space-y-5">
            <div>
                <label className="block text-sm font-bold text-black mb-2">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"                />
            </div>
            <div>
                <label className="block text-sm font-bold text-black mb-2">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
                />
            </div>
            <div>
                <label className="block text-sm font-bold text-black mb-2">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
                />
            </div>
            <div>
                <label className="block text-sm font-bold text-black mb-2">Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-black"
                />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
                type="submit"
                className="w-full py-3 mt-2 font-bold text-white bg-[#A7C7E7] rounded-lg hover:bg-[#89b0d9] transition-colors"            >
                Sign In
            </button>
            <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-pink-500 hover:underline">
                    Login
                </Link>
            </p>
        </form>
    );
}
