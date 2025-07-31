const express = require("express");
const db = require("./models");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Connect to DB
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
    app.listen(3000, () => console.log("Server started on port 3000"));
  })
  .catch((err) => console.error("DB error:", err));
