const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  collectorName: { type: String, required: true },
  donationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Donate', required: true },
  collectionDate: { type: Date, required: true },
  remarks: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Collection', collectionSchema);
