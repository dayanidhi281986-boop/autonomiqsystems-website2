'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState({ name: '', role: '', tasks: 0, requests: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: 'Dayanidhi S (Founder)',
        role: 'CEO & Founder',
        tasks: 3,
        requests: 1,
      });
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <h1>Dashboard</h1>
      <div className="grid" style={{ marginTop: 24 }}>
        <div className="card">
          <h3>{user.name}</h3>
          <p>{user.role}</p>
        </div>
        <div className="card">
          <h3>Open Tasks: {user.tasks}</h3>
        </div>
        <div className="card">
          <h3>Requests: {user.requests}</h3>
        </div>
      </div>
    </>
  );
}
