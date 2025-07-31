module.exports = (sequelize, DataTypes) => {
  const ChatBotInteraction = sequelize.define("ChatBotInteraction", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    query: { type: DataTypes.TEXT },
    response: { type: DataTypes.TEXT },
  });

  ChatBotInteraction.associate = (models) => {
    ChatBotInteraction.belongsTo(models.User, { foreignKey: "userId" });
  };

  return ChatBotInteraction;
};
