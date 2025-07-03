import Image from 'next/image';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-8 text-center lg:text-left text-black">Login</h1>
          <LoginForm />
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 bg-[#F0F5F2] items-center justify-center p-12">
        <Image
          src="/images/signinup/gambar-login.png"
          alt="Ilustrasi Halaman Login"
          width={500}
          height={500}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}
