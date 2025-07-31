module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define("Inventory", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    stock: { type: DataTypes.INTEGER },
    threshold: { type: DataTypes.INTEGER },
  });

  Inventory.associate = (models) => {
    Inventory.belongsTo(models.FoodItem, { foreignKey: "foodItemId" });
  };

  return Inventory;
};
