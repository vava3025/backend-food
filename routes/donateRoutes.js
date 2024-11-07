const express = require('express');
const router = express.Router();
const donateModel = require('../models/donateModel');

// Create a new donation
router.post('/donate', async (req, res) => {
  try {
    const donation = new donateModel(req.body);
    await donation.save();
    res.status(201).json(donation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all donations
router.get('/donations', async (req, res) => {
  try {
    const donations = await donateModel.find();
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// // Update donation status
// router.put('/donations/:id', async (req, res) => {
//   try {
//     const donation = await donateModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(donation);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

module.exports = router;
