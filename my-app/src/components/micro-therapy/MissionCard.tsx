// FUNGSI: Komponen untuk menampilkan SATU kartu misi.

import Link from 'next/link';
import Image from 'next/image';

// Definisikan tipe data untuk props
type Mission = {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  bgImage: string;
  progress: number;
};

interface MissionCardProps {
  mission: Mission;
}

export default function MissionCard({ mission }: MissionCardProps) {
  return (
    <Link href={`/micro-therapy/${mission.id}`} className="block group">
      <div className="relative w-full h-40 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
        
        {/* Gambar Latar Belakang */}
        <Image
          src={mission.bgImage}
          alt={`Latar belakang untuk ${mission.title}`}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-opacity duration-300 group-hover:opacity-90"
        />

        {/* Konten Teks di atas gambar */}
        <div className="relative z-10 p-6 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-gray-800">{mission.title}</h3>
          <p className="mt-1 flex-grow text-gray-600">{mission.description}</p>
          
          <div className="mt-2">
            <span className="text-sm font-medium text-gray-500">
              Estimated Time: {mission.estimatedTime}
            </span>
            
            {/* Progress Bar */}
            <div className="w-full bg-black/10 rounded-full h-2 mt-2">
              <div 
                className="bg-white h-2 rounded-full" 
                style={{ width: `${mission.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
