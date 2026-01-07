import { Db, MongoClient } from 'mongodb';
import clientPromise from './mongodb';

export async function mongoConnect(): Promise<{
  client: MongoClient;
  db: Db;
}> {
  const client = await clientPromise;
  const db = client.db('KeeperDB');
  return { client, db };
}
