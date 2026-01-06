'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/portal/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/portal/dashboard');
    } else {
      const data = await res.json();
      setError(data.error);
    }
    setLoading(false);
  };

  return (
    <>
      <h1 style={{ fontSize: 32 }}>Employee Login</h1>
      <p>Test: ceo@autonomiqsystems.com / autonomiq123</p>
      <form onSubmit={login} style={{ maxWidth: 480, marginTop: 24 }}>
        <input
          type="email"
          placeholder="Work Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(255,255,255,.04)",
            color: "#E9EEF7",
            marginBottom: 12,
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,.12)",
            background: "rgba(255,255,255,.04)",
            color: "#E9EEF7",
            marginBottom: 16,
          }}
        />
        {error && <p style={{ color: '#ff4d4f', marginBottom: 12 }}>{error}</p>}
        <button 
          type="submit" 
          disabled={loading}
          className="btn btnPrimary"
          style={{ width: "100%" }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </>
  );
}
