const express = require('express');
const router = express.Router();
const collectionModel = require('../models/collectionModel');
const donateModel = require('../models/donateModel');

// Record a collection
router.post('/collect', async (req, res) => {
  try {
    const collection = new collectionModel(req.body);
    await collection.save();
    
    // Update donation status to 'collected'
    await donateModel.findByIdAndUpdate(req.body.donationId, { status: 'collected' });
    
    res.status(201).json(collection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all collections
router.get('/collections', async (req, res) => {
  try {
    const collections = await collectionModel.find().populate('donationId');
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
