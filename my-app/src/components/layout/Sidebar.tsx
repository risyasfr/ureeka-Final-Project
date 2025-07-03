
// Komponen sidebar yang HANYA menggunakan gambar sebagai latar belakang.

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; 

// --- Data untuk link navigasi ---
const mainNavLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "/images/Navbar/Dashboard.png",
  },
  {
    name: "Emotional Check-in",
    href: "/emotional-checkin",
    icon: "/images/Navbar/emotional.png",
  },
  {
    name: "Micro-Therapy",
    href: "/micro-therapy",
    icon: "/images/Navbar/micro-therapy-emot.png",
  },
  { name: "Insights", href: "/insights", icon: "/images/Navbar/insight.png" },
];

const bottomNavLinks = [
  {
    name: "Preferences",
    href: "/preferences",
    icon: "/images/Navbar/preferences.png",
  },
  { name: "Sign Out", href: "#", icon: "/images/Navbar/signout.png" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, loading } = useAuth(); 

  // Tampilkan loading skeleton saat data belum siap
  if (loading) {
    return (
      <aside className="w-72 h-screen bg-gray-200 p-6 animate-pulse">
      </aside>
    );
  }

  return (
    <aside className="w-72 h-screen relative shadow-lg">
      
      {/* 1. Gambar Latar Belakang */}
      <Image
        src="/images/Navbar/sidebar.png" 
        alt="Latar belakang sidebar"
        layout="fill" 
        objectFit="cover"
        className="-z-10" 
        priority 
      />

      {/* 2. Konten Sidebar */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div>
          {/* --- Bagian Profil Pengguna --- */}
           <div className="bg-white p-4 rounded-xl text-center mb-8 shadow-md">
            <div className="flex justify-center">
              <Image
                src={user?.photoURL || "/images/Navbar/profile.png"} 
                alt="Foto Profil"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>
            {/* Tampilkan nama dan email dari user yang login */}
            <h3 className="font-bold text-lg mt-2 text-gray-800">
              {user ? user.displayName : 'Guest User'}
            </h3>
            <p className="text-sm text-gray-500">
              {user ? user.email : 'Please log in'}
            </p>
          </div>

          {/* --- Bagian Menu Utama --- */}
          <nav>
            <ul>
              {mainNavLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <li key={link.name} className="mb-2">
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-200
                        ${
                          isActive
                            ? "bg-white text-blue-600 font-bold shadow-sm"
                            : "text-gray-600 hover:bg-white/70" 
                        }`}
                    >
                      <Image
                        src={link.icon}
                        alt={`${link.name} icon`}
                        width={24}
                        height={24}
                      />
                       <span className="font-bold">{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* --- Bagian Menu Bawah (Preferences & Sign Out) --- */}
        <div>
          <div className="border-t border-gray-400/50 mb-4"></div>
          <ul>
            {bottomNavLinks.map((link) => (
              <li key={link.name} className="mb-2">
                {link.name === "Sign Out" ? (
                  <button className="w-full flex items-center space-x-4 px-4 py-3 text-gray-600 hover:bg-white/70 rounded-xl transition-all duration-200">
                    <Image
                      src={link.icon}
                      alt={`${link.name} icon`}
                      width={24}
                      height={24}
                    />
                    <span className="font-bold">{link.name}</span>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-200
                          ${
                            pathname.startsWith(link.href)
                              ? "bg-white text-blue-600 font-bold shadow-sm"
                              : "text-gray-600 hover:bg-white/70"
                          }`}
                  >
                    <Image
                      src={link.icon}
                      alt={`${link.name} icon`}
                      width={24}
                      height={24}
                    />
                     <span className="font-bold">{link.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
