import { query } from '@/lib/pgdb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await query('SELECT NOW() as now');
    console.log(result);
    return NextResponse.json({ 
      status: 'success', 
      time: result.rows[0].now,
      message: 'Database connection successful' 
    });
  } catch (error: any) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      { status: 'error', message: error.message },
      { status: 500 }
    );
  }
}
