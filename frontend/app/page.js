"use client";
import { useEffect, useState } from "react";
import DropCard from "../components/DropCard";
import Header from "../components/Header";
import { claimDrop, getDrops, joinWaitlist, leaveWaitlist } from "../utils/api";

export default function HomePage() {
  /*return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-700">Tailwind Çalışıyor 🚀</h1>
      <p className="mt-4 text-lg text-gray-600">Artık arayüz düzgün görünmeli.</p>
    </div>
  );*/
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    // useEffect içinde async fonksiyon oluştur
    const fetchData = async () => {
      try {
        const data = await getDrops();
        setDrops(data); // async içinde setState
      } catch (err) {
        alert(err.message);
      }
    };

    fetchData();
  }, []); // dependency array boş, sadece mount'ta çalışacak

  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Active Drops</h1>
        {drops.map(drop => (
          <DropCard
            key={drop.id}
            drop={drop}
            onJoin={async (id) => { await joinWaitlist(id); setDrops(await getDrops()); }}
            onLeave={async (id) => { await leaveWaitlist(id); setDrops(await getDrops()); }}
            onClaim={async (id) => { await claimDrop(id); setDrops(await getDrops()); }}
          />
        ))}
      </main>
    </div>
  );
}
