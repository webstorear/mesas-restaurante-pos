const mongoose = require('mongoose');

const mesaSchema = new mongoose.Schema({
  numero: { type: String, required: true },
  estado: {
    type: String,
    enum: ['libre', 'ocupada', 'reservada', 'cuenta-pedida'],
    default: 'libre',
  },
  capacidad: { type: Number, default: 4 },
}, { timestamps: true });

module.exports = mongoose.model('Mesa', mesaSchema);
