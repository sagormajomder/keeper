import { query } from '@/lib/pgdb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS notes (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "noteTitle" TEXT NOT NULL,
        "noteContent" TEXT,
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await query(createTableQuery);
    
    return NextResponse.json({ 
      message: 'Database initialized successfully',
      table: 'notes'
    });
  } catch (error: any) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
