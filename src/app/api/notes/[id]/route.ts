import { query } from '@/lib/pgdb';
import { NextRequest, NextResponse } from 'next/server';

// Get Single Note
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const result = await query('SELECT * FROM notes WHERE id = $1', [id]);

    // console.log('sigle NOte', result);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch note' },
      { status: 500 },
    );
  }
}

// Update Note
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const { noteTitle, noteContent } = body;

    const updateQuery = `
      UPDATE notes
      SET "noteTitle" = $1, "noteContent" = $2
      WHERE id = $3
      RETURNING *
    `;

    const result = await query(updateQuery, [noteTitle, noteContent, id]);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Note updated', note: result.rows[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to update note' },
      { status: 500 },
    );
  }
}

// Delete Note
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    const result = await query('DELETE FROM notes WHERE id = $1 RETURNING *', [
      id,
    ]);

    // console.log('Deleted Result', result);

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Note deleted', note: result.rows[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to delete note' },
      { status: 500 },
    );
  }
}
