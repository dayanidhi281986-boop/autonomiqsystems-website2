import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  if (email.includes('@autonomiqsystems.com') && password === 'autonomiq123') {
    const response = NextResponse.json({ success: true });
    cookies().set('auth-token', 'valid', { httpOnly: true });
    return response;
  }
  return NextResponse.json({ error: 'Wrong email/password' }, { status: 401 });
}
