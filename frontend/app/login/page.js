'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import "tailwindcss";
import Button from '../../components/Button';
import Header from '../../components/Header';
import { login } from '../../utils/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await login(email, password);
      if (res.error) setError(res.error);
      else {
        localStorage.setItem('token', res.token);
        router.push('/');
      }
    } catch {
      setError('Sunucu hatası');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ease-in-out">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-2 text-gray-900 tracking-tight">Giriş Yap</h1>
            <p className="text-md text-gray-600 leading-relaxed">
              Hesabınıza giriş yaparak devam edin.
            </p>
          </div>

          {error && (
            <p className="text-red-700 bg-red-50 p-3 rounded-lg mb-6 text-center border border-red-200 text-sm animate-fadeIn">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="email"
              name="email"
              placeholder="E-posta Adresi"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Şifre"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Giriş Yap'
              )}
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Hesabın Yok mu?{' '}
            <a
              href="/signup"
              className="font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200"
            >
              Kayıt Ol
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}



/*'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { login } from '../../utils/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await login(email, password);
      if (res.error) {
        setError(res.error);
      } else {
        localStorage.setItem('token', res.token);
        router.push('/');
      }
    } catch (err) {
      setError('Sunucu hatası');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Giriş Yap</h1>
          
          {error && (
            <p className="text-red-600 bg-red-100 p-2 rounded mb-4 text-center">{error}</p>
          )}
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Giriş Yap'}
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            Hesabın Yok mu? <a href="/signup" className="text-blue-500 hover:underline">Kayıt Ol</a>
          </p>
        </div>
      </div>
    </div>
  );
}*/


/*'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { login } from '../../utils/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      if (res.error) {
        setError(res.error);
      } else {
        localStorage.setItem('token', res.token); // JWT token kaydediyoruz
        router.push('/'); // Ana sayfaya yönlendir
      }
    } catch (err) {
      setError('Sunucu hatası');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-md mx-auto py-16">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
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
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
}*/
