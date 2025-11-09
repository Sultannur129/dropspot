'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { signup } from '../../utils/api';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(email, password);
      if (res.error) {
        setError(res.error);
      } else {
        router.push('/login');
      }
    } catch (err) {
      setError('Sunucu hatası');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-md mx-auto py-16">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    </div>
  );
}
