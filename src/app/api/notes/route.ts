import { query } from '@/lib/pgdb';
import { NOTE } from '@/types/type';
import { NextRequest, NextResponse } from 'next/server';

// Get All Notes
export async function GET() {
  try {
    const result = await query('SELECT * FROM notes ORDER BY "createdAt" DESC');
    // console.log('GET Result', result);
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to get notes' }, { status: 500 });
  }
}

// Create Note
export async function POST(req: NextRequest) {
  try {
    const data: NOTE = await req.json();

    if (!data.noteTitle) {
      return NextResponse.json(
        { error: 'Note Title is required' },
        { status: 400 },
      );
    }

    const insertQuery = `
      INSERT INTO notes ("noteTitle", "noteContent")
      VALUES ($1, $2)
      RETURNING *
    `;

    const result = await query(insertQuery, [data.noteTitle, data.noteContent]);
    // console.log('Server result', result);

    return NextResponse.json(
      { message: 'Note created', note: result.rows[0] },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to create note' },
      { status: 500 },
    );
  }
}
