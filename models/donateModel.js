const mongoose = require('mongoose');

const donateSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  foodType: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  contactInfo: { type: String, required: true },
  status: { type: String, enum: ['pending', 'collected'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Donate', donateSchema);
