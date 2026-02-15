export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    try {
      const { initDb } = await import('@/lib/initDb');
      await initDb();
    } catch (error) {
      console.error('Failed to initialize database during instrumentation:', error);
    }
  }
}
