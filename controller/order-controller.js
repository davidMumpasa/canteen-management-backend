const { Order, User } = require("../models");

// Create Order
exports.createOrder = async (req, res) => {
  const { item_name, quantity, total_price, userId, icon_url } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    const order = await Order.create({
      item_name,
      quantity,
      total_price,
      userId,
      icon_url,
    });

    res.status(201).json({ message: "Order created", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create order" });
  }
};

// Get All Orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({ include: User });
    res.json({ orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve orders" });
  }
};

// Get Order by ID
exports.getOrderById = async (req, res) => {
  const { id } = req.query;

  try {
    const order = await Order.findByPk(id, { include: User });

    if (!order) return res.status(404).json({ error: "Order not found" });

    res.json({ order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve order" });
  }
};

// Update Order
exports.updateOrder = async (req, res) => {
  const { id } = req.query;
  const { item_name, quantity, total_price } = req.body;

  try {
    const order = await Order.findByPk(id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    order.item_name = item_name ?? order.item_name;
    order.quantity = quantity ?? order.quantity;
    order.total_price = total_price ?? order.total_price;

    await order.save();
    res.json({ message: "Order updated", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update order" });
  }
};

// Delete Order
exports.deleteOrder = async (req, res) => {
  const { id } = req.query;

  try {
    const order = await Order.findByPk(id);
    if (!order) return res.status(404).json({ error: "Order not found" });

    await order.destroy();
    res.json({ message: "Order deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete order" });
  }
};
