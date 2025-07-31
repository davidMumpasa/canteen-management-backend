module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    paymentMethod: { type: DataTypes.STRING }, // mobile_money, card, etc.
    status: { type: DataTypes.STRING }, // success, failed, pending
    transactionId: { type: DataTypes.STRING },
  });

  Payment.associate = (models) => {
    Payment.belongsTo(models.Order, { foreignKey: "orderId" });
  };

  return Payment;
};
