import { query } from '@/lib/pgdb';

export async function initDb() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS notes (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      "noteTitle" TEXT NOT NULL,
      "noteContent" TEXT,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await query(createTableQuery);
    console.log('Database initialized successfully: notes table checked/created.');
  } catch (error) {
    console.error('Error initializing database:', error);
    // We might not want to crash the app if DB init fails, just log it.
  }
}
