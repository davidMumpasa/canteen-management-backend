const express = require("express");
const router = express.Router();
const { Order } = require("../models");

// Create new order
router.post("/", async (req, res) => {
  try {
    const { userId, totalAmount } = req.body;
    const order = await Order.create({ userId, totalAmount });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to create order", error });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
});

module.exports = router;
