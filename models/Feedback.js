module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define("Feedback", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    message: { type: DataTypes.TEXT },
    rating: { type: DataTypes.INTEGER },
  });

  Feedback.associate = (models) => {
    Feedback.belongsTo(models.User, { foreignKey: "userId" });
  };

  return Feedback;
};
