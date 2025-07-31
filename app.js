const express = require("express");
const morgan = require("morgan");
const db = require("./models");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

// Use morgan for logging
app.use(morgan("combined"));

// Routes
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

// Connect to DB
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
    app.listen(3000, () => console.log("Server started on port 3000"));
  })
  .catch((err) => console.error("DB error:", err));
