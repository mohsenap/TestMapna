const { Sequelize, DataTypes, QueryTypes } = require("sequelize");
const { AppSQL } = require("./AppSQL");
const { Instrument } = require("./Entity/Instrument");
const { Trade } = require("./Entity/Trade");

//References//

const EntityModels = (sequelize) => {
  return {
    Instrument: sequelize.define("Instrument", Instrument, {
      timestamps: false,
      freezeTableName: false,
      tableName: "Instrument",
      createdAt: false,
      updatedAt: false,
    }),
    Trade: sequelize.define("Trade", Trade, {
      timestamps: false,
      freezeTableName: false,
      tableName: "Trade",
      createdAt: false,
      updatedAt: false,
    })   
    //Entities//
  };
};

const PrepareDataBase = async (sequelize) => {
  const queryInterface = sequelize.getQueryInterface();
  queryInterface.createTable("Instrument", Instrument).catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

  queryInterface.createTable("Trade", Trade).catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
 
};

PrepareDataBase(AppSQL);

exports.EntityModels = EntityModels;
