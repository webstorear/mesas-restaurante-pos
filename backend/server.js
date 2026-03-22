const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ← RUTAS MESAS
app.use('/api/mesas', require('./src/routes/mesas'));

app.get('/api/test', (req, res) => {
  res.json({ ok: true, url: 'http://localhost:3001/api/mesas' });
});

mongoose.connect('mongodb://localhost:27017/mesas_pos')
  .then(() => console.log('✅ DB OK'))
  .catch(console.error);

app.listen(3001, () => console.log('🚀 http://localhost:3001'));
