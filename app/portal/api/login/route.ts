import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (email.includes('@autonomiqsystems.com') && password === 'autonomiq123') {
    const response = NextResponse.json({ success: true });
    cookies().set('auth-token', 'employee-' + email, { 
      httpOnly: true, 
      secure: true, 
      maxAge: 60 * 60 * 24 * 30 
    });
    return response;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
