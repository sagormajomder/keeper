import { mongoConnect } from '@/lib/mongoConnect';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

// Delete Note
export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = await context.params;

    const { db, client } = await mongoConnect();

    const result = await db
      .collection('notes')
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Note deleted', result });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to delete note' },
      { status: 500 }
    );
  }
}
