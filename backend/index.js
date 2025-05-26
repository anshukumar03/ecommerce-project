const express = require('express');

const cors = require('cors');  // Loads CORS middleware, which lets your React frontend (running on a different port) talk to this backend.

const bodyParser = require('body-parser'); // Loads body-parser, which helps extract JSON data from incoming requests (like orders).

const app = express();

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '@Nshu3122002',
  database: 'collective_store',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});




app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Database error' });
  }
});


app.post('/api/orders', async (req, res) => {
  const { name, email, address, cart } = req.body;
  try {
    await pool.query(
      'INSERT INTO orders (name, email, address, cart) VALUES (?, ?, ?, ?)',
      [name, email, address, JSON.stringify(cart)]
    );
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Database error' });
  }
});



app.listen(PORT, () => {
  console.log(`Backend server running in http://localhost:${PORT}`);
});