const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

// POST route to save order data
router.post('/orderData', async (req, res) => {
  try {
    const { order_data, email, order_date } = req.body;

    // Check if an order with the given email already exists
    let existingOrder = await Order.findOne({ email });

    if (existingOrder) {
      // If the order exists, update it
      existingOrder.order_data.push({
        order_data,
        order_date
      });
      await existingOrder.save();
    } else {
      // If the order does not exist, create a new one
      await Order.create({
        email,
        order_data: [{
          order_data,
          order_date
        }]
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing order:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST route to fetch order data by email
router.post('/myorderData', async (req, res) => {
  try {
    const { email } = req.body;
    let myData = await Order.findOne({ email });

    if (!myData) {
      return res.status(404).json({ success: false, error: 'No orders found' });
    }

    res.json({ orderData: myData.order_data });
  } catch (error) {
    console.error('Error fetching order data:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
