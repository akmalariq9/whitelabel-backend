"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class artikel extends Model {
    static associate(models) {
      // define association here
      artikel.belongsTo(models.user, {
        foreignKey: "userId",
        as: "user",
      });

      artikel.belongsTo(models.category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }

  artikel.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "artikel",
    }
  );
  return artikel;
};
