import MissionCard from '@/components/micro-therapy/MissionCard';
import { therapyMissions } from '@/lib/data';

export default function MicroTherapyListPage() {
  return (
    <main className="p-4 sm:p-8">
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Micro-Therapy Missions</h1>
      </div>

      <div className="space-y-6">
        {therapyMissions.map((mission) => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
      </div>
    </main>
  );
}
