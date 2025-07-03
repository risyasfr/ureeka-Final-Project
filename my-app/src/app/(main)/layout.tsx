"use client"; // Diperlukan karena AuthProvider menggunakan hooks

import Sidebar from "@/components/layout/Sidebar";
import { AuthProvider } from "@/context/AuthContext"; // Import provider kita

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Bungkus AuthProvider
    <AuthProvider>
      <div className="flex">
        <Sidebar />
        <main className="flex-grow bg-white p-8">
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}
