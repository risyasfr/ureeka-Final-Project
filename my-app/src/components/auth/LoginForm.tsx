"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/dashboard');
        } catch (err) {
            if (err instanceof FirebaseError) {
                if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found') {
                    setError("Invalid email or password.");
                } else {
                    setError("An error occurred. Please try again.");
                }
            }
            console.error("Login Error:", err);
        }
    };

    return (
      <form onSubmit={handleLogin} className="space-y-5">
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
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
                type="submit"
                className="w-full py-3 mt-2 font-bold text-white bg-[#A7C7E7] rounded-lg hover:bg-[#89b0d9] transition-colors"
            >
                Sign In
            </button>
            <p className="text-center text-sm text-gray-600">
                Don&#39;t have an account?{' '}
                <Link href="/signup" className="font-medium text-pink-500 hover:underline">
                    Register
                </Link>
            </p>
        </form>
    );
}