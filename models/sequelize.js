const Sequelize = require("sequelize");

const { NAME_DB, HOST_DB, PORT_DB, PASSWORD_DB, USER_DB } = process.env;

const sequelize = new Sequelize(NAME_DB, USER_DB, PASSWORD_DB, {
  host: HOST_DB,
  port: parseInt(PORT_DB, 10),
  dialect: "postgres",
});

module.exports = sequelize;


