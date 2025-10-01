import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DB_URL,
  // postgresql://abhishek:12345@db:5432/testdb
});

export default pool;
