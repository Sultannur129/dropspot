'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import { claimDrop, getDrops, joinWaitlist, leaveWaitlist } from '../../../utils/api';

export default function DropDetails() {
  const [drop, setDrop] = useState(null);
  const [status, setStatus] = useState('');
  const params = useParams();
  const dropId = params.id;

  useEffect(() => {
    async function fetchDrop() {
      const drops = await getDrops();
      const d = drops.find((d) => d.id === parseInt(dropId));
      setDrop(d);
    }
    fetchDrop();
  }, [dropId]);

  const handleJoin = async () => {
    try {
      const res = await joinWaitlist(dropId);
      setStatus('Waitlist’e katıldınız!');
    } catch (err) {
      setStatus(err.message);
    }
  };

  const handleLeave = async () => {
    try {
      const res = await leaveWaitlist(dropId);
      setStatus('Waitlist’ten ayrıldınız!');
    } catch (err) {
      setStatus(err.message);
    }
  };

  const handleClaim = async () => {
    try {
      const res = await claimDrop(dropId);
      if (res.claim_code) setStatus(`Claim kodunuz: ${res.claim_code}`);
      else setStatus('Claim yapılamadı');
    } catch (err) {
      setStatus(err.message);
    }
  };

  if (!drop) return <p>Yükleniyor...</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-xl mx-auto py-16">
        <h1 className="text-2xl font-bold mb-4">{drop.title}</h1>
        <p className="mb-2">{drop.description}</p>
        <p className="mb-4">Drop zamanı: {new Date(drop.drop_time).toLocaleString()}</p>
        <div className="flex gap-4">
          <Button onClick={handleJoin}>Waitlist’e Katıl</Button>
          <Button onClick={handleLeave}>Waitlist’ten Ayrıl</Button>
          <Button onClick={handleClaim}>Claim Yap</Button>
        </div>
        {status && <p className="mt-4 text-green-600">{status}</p>}
      </div>
    </div>
  );
}
