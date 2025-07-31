module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  });

  return Admin;
};
