module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define("OrderItem", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT },
  });

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, { foreignKey: "orderId" });
    OrderItem.belongsTo(models.FoodItem, { foreignKey: "foodItemId" });
  };

  return OrderItem;
};
