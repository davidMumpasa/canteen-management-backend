const express = require("express");
const orderController = require("../controller/order-controller");
const router = express.Router();

router.post("/add", orderController.createOrder);
router.get("/getAll", orderController.getAllOrders);
router.get("/getOne", orderController.getOrderById);
router.put("/update", orderController.updateOrder);
router.delete("/delete", orderController.deleteOrder);

module.exports = router;
