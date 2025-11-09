import Link from 'next/link';

export default function Header({ isAdmin }) {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">DropSpot</h1>
      <nav className="space-x-4">
        <Link href="/">Drops</Link>
        {isAdmin ? (
          <Link href="/admin" className="hover:underline">Admin</Link>
        ) : (
          <Link href="/login" className="hover:underline">Login</Link>
        )}
      </nav>
    </header>
  );
}
