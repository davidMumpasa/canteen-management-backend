const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./models");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

// Routes
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

// Connect to DB
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
    app.listen(3000, "0.0.0.0", () =>
      console.log("Server started on port 3000 and accessible on all IPs")
    );
  })
  .catch((err) => console.error("DB error:", err));
