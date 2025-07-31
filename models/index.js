require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.User = require("./User")(sequelize, DataTypes);
db.Order = require("./Order")(sequelize, DataTypes);
db.Admin = require("./Admin")(sequelize, DataTypes);
db.FoodItem = require("./FoodItem")(sequelize, DataTypes);
db.OrderItem = require("./OrderItem")(sequelize, DataTypes);
db.Payment = require("./Payment")(sequelize, DataTypes);
db.Inventory = require("./Inventory")(sequelize, DataTypes);
db.Feedback = require("./Feedback")(sequelize, DataTypes);
db.ChatBotInteraction = require("./ChatBotInteraction")(sequelize, DataTypes);

// Setup associations
Object.values(db).forEach((model) => {
  if (model.associate) model.associate(db);
});

module.exports = db;
