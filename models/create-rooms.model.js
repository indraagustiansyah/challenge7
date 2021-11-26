const sequelize = require('./sequelize');
const { Model, DataTypes } = require("sequelize");

class UserRooms extends Model {}

UserRooms.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      room_name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      playerone: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      playertwo: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      pointone: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      pointtwo: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      pilihan1: {
        type: DataTypes.STRING(32),
        allowNull: false
      },
      pilihan2: {
        type: DataTypes.STRING(32),
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      deletedAt: {
          type: DataTypes.DATE,
          allowNull: true
      }
},
  {
    sequelize,
    tableName: "user_rooms",
    modelName: 'user_rooms',
    timestamps: true,
    paranoid: true
  }
);

module.exports = UserRooms;