module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User ",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Order, { foreignKey: "userId" });
    User.hasMany(models.Feedback, { foreignKey: "userId" });
    User.hasMany(models.ChatBotInteraction, { foreignKey: "userId" });
  };

  return User;
};
