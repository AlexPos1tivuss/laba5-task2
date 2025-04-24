
import * as dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = +process.env.PORT || 4000;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'secret-key';

// Database configuration with connection pooling
export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Handle pool errors
db.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});
