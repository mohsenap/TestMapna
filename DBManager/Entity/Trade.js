const { DataTypes } = require("sequelize");
const { faker } = require('@faker-js/faker');

const Trade = {
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: "Id",
    random: () => {
      return faker.datatype.number();
    },
  },
  InstrumentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: false,
    autoIncrement: false,
    field: "InstrumentId",
    random: () => {
      return faker.datatype.number(1,2);
    },
  },
  DateEn: {
    type: DataTypes.DATE,
    allowNull: true,
    primaryKey: false,
    field: "DateEn",
    random: () => {
      return faker.date.past();
    }
  },
  Open: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    primaryKey: false,
    field: "Open",
    random: () => {
      return faker.datatype.number();
    },
  },
  High: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    primaryKey: false,
    field: "High",
    random: () => {
      return faker.datatype.number();
    },
  },
  Low: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    primaryKey: false,
    field: "Low",
    random: () => {
      return faker.datatype.number();
    },
  },
  Close: {
    type: DataTypes.DECIMAL,
    allowNull: true,
    primaryKey: false,
    field: "Close",
    random: () => {
      return faker.datatype.number();
    }
  },
};

exports.Trade = Trade;
