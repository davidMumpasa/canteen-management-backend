const express = require("express");
const userController = require("../controller/user-controller");
const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/forgot-password", userController.forgotPassword);
router.get("/getAll", userController.getAllUsers);
router.get("/getOne", userController.getUserById);
router.put("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);

module.exports = router;
