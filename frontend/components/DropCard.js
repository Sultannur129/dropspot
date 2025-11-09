export default function DropCard({ drop, onJoin, onLeave, onClaim }) {
  return (
    <div className="border rounded shadow p-4 mb-4 bg-white hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">{drop.title}</h2>
      <p className="text-gray-700 mb-3">{drop.description}</p>
      <div className="flex gap-2">
        <button onClick={() => onJoin(drop.id)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Join Waitlist</button>
        <button onClick={() => onLeave(drop.id)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Leave Waitlist</button>
        <button onClick={() => onClaim(drop.id)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Claim</button>
      </div>
    </div>
  );
}
