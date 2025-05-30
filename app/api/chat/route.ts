import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  // Here you would connect to your AI backend or service
  // For now, return a dummy response
  const reply = `Echo: ${message}`;

  return NextResponse.json({ reply });
} 