const express = require('express');
const router = express.Router();
const adminModel = require('../models/adminModel');

// Admin registration
router.post('/register', async (req, res) => {
  try {
    const admin = new adminModel(req.body);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Admin login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await adminModel.findOne({ email, password });
    if (!admin) return res.status(404).json({ message: 'Invalid credentials' });
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
