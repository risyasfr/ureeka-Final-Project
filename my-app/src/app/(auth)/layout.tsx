import { Sora } from 'next/font/google';

const sora = Sora({ 
  subsets: ['latin'],
  weight: ['400', '700'] 
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${sora.className} flex items-center justify-center min-h-screen bg-white`}>
      {children}
    </main>
  );
}