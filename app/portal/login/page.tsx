"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";

export default function PortalLoginPage() {
  const router = useRouter();
  const supabase = createSupabaseBrowser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setMsg("Signing in...");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) return setMsg(error.message);

    router.push("/portal/dashboard");
    router.refresh();
  }

  return (
    <div style={{ maxWidth: 420 }}>
      <h1>Employee Login</h1>
      <form onSubmit={signIn}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div style={{ height: 10 }} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div style={{ height: 10 }} />
        <button type="submit">Sign in</button>
      </form>
      <div style={{ marginTop: 10 }}>{msg}</div>
    </div>
  );
}
