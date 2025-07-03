import Link from "next/link";
import Image from "next/image";

// Data untuk halaman
const mission = {
  title: "Mindful Breathing",
  description: "Focus on your breath for 5 minutes to enhance mindfulness.",
  bgImage: "/images/micro-therapy/Orange.png",
};

export default function MindfulBreathingPage() {
  return (
    <main className="p-4 sm:p-8">
      <div className="relative w-full h-60 rounded-2xl overflow-hidden shadow-lg mb-8">
        <Image
          src={mission.bgImage}
          alt={`Latar belakang untuk ${mission.title}`}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 p-8 flex flex-col justify-end h-full text-black">
          <h1 className="text-5xl font-bold">{mission.title}</h1>
          <p className="mt-2 text-lg">{mission.description}</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold mb-6">Mulai Misimu</h2>
        <p className="text-gray-700">
          Konten interaktif untuk Latihan Pernapasan (timer, animasi, dll.) akan
          muncul di sini.
        </p>
        <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg h-48 flex items-center justify-center">
          <p className="text-gray-500">Komponen Timer Pernapasan</p>
        </div>
        <Link href="/micro-therapy" className="text-blue-400 mt-8 inline-block">
          &larr; Kembali ke daftar misi
        </Link>
      </div>
    </main>
  );
}
