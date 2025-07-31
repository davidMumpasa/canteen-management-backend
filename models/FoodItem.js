module.exports = (sequelize, DataTypes) => {
  const FoodItem = sequelize.define("FoodItem", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.FLOAT, allowNull: false },
    image: { type: DataTypes.STRING },
  });

  FoodItem.associate = (models) => {
    FoodItem.hasMany(models.OrderItem, { foreignKey: "foodItemId" });
    FoodItem.hasOne(models.Inventory, { foreignKey: "foodItemId" });
  };

  return FoodItem;
};
