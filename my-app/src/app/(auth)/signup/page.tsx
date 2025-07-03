import Image from 'next/image';
import SignupForm from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="flex w-full h-screen">
      <div className="hidden lg:flex w-1/2 bg-[#FCE9F2] items-center justify-center p-12">
        <Image
          src="/images/signinup/gambar-signup.png"
          alt="Ilustrasi Halaman Signup"
          width={500}
          height={500}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-8 text-center lg:text-left text-black">Register</h1>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}