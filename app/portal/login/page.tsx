export default function LoginPage() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1>Login</h1>
      <p>(Next step: connect real authentication)</p>

      <form>
        <div>
          <label>Email</label><br />
          <input type="email" placeholder="name@company.com" />
        </div>
        <br />
        <div>
          <label>Password</label><br />
          <input type="password" placeholder="••••••••" />
        </div>
        <br />
        <button type="button">Sign in</button>
      </form>
    </main>
  );
}
