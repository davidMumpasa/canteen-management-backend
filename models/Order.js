module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      item_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      icon_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      tableName: "orders",
    }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: "userId" });
    Order.hasMany(models.OrderItem, { foreignKey: "orderId" });
    Order.hasOne(models.Payment, { foreignKey: "orderId" });
  };

  return Order;
};
