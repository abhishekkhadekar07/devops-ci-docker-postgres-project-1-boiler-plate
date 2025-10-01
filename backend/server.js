// server.js
import express from 'express';
import pool from './db.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL
    );  
  `);
  console.log(' Ensured users table exists');
}

app.get('/api/users', async (req, res) => {
  try {
    await ensureSchema();
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('List error:', err);
    res.status(500).send('Server error');
  }
});

app.post('/api/users', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query('INSERT INTO users (name) VALUES ($1) RETURNING *', [name]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Insert error:', err);
    res.status(500).send('Server error');
  }
});

ensureSchema()
  .then(() => {
    app.listen(8000, '0.0.0.0', () => console.log('Backend running on port 8000'));
  })
  .catch((err) => {
    console.error('Schema init failed:', err);
    process.exit(1);
  });
