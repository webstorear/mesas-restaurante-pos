const express = require('express');
const router = express.Router();
const Mesa = require('../models/Mesa');

// GET todas las mesas
router.get('/', async (req, res) => {
  const mesas = await Mesa.find();
  res.json(mesas);
});

// Crear mesa
router.post('/', async (req, res) => {
  const mesa = new Mesa(req.body);
  await mesa.save();
  res.json(mesa);
});

module.exports = router;
