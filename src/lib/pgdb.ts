import { Pool, PoolConfig } from 'pg';

const poolConfig: PoolConfig = {
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT || '5432'),
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};


let pool: Pool;

if (process.env.NODE_ENV === 'production') {
  pool = new Pool(poolConfig);
} else {
  if (!(global as any).postgresPool) {
    (global as any).postgresPool = new Pool(poolConfig);
  }
  pool = (global as any).postgresPool;
}

export const query = async (text: string, params?: any[]) => {
  const res = await pool.query(text, params);
  return res;
};

export const getClient = () => pool.connect();

export default pool;
