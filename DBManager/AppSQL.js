const { Sequelize, QueryTypes, DataTypes } = require("sequelize");
const SequelizeAuto = require("sequelize-auto");

var sequelize = new Sequelize("TestMapna", "sa", "mohsen", {
  host: "localhost",
 // port: 3306,
  dialect: "mssql",
  dialectOptions: {
    options: { encrypt: true },
    requestTimeout: 300000,
    statement_timeout: 10000,
    timeout: 4200,
    useUTC: false, //for reading from database
    dateStrings: true,
    typeCast: true,
    idle_in_transaction_session_timeout: 5000,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 900000,
    idle: 10000,
  },
  timezone: "+00:00",
});


//sequelize.define("",{}).count({where:})
exports.AppSQL = sequelize;
