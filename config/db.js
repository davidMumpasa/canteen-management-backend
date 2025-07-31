const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("canteen_db", "root", "your_password", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: "mysql",
  logging: false,
});
module.exports = sequelize;
