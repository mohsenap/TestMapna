const { DataTypes } = require("sequelize");
const { faker } = require('@faker-js/faker');

const Instrument = {
  Id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: "Id",
    random: () => {
      return faker.datatype.number()
    },
  },
  Name: {
    type: DataTypes.STRING(40),
    allowNull: true,
    primaryKey: false,
    field: "Name",
    random: () => {
      return faker.name.fullName()
    },    
  }
};

exports.Instrument = Instrument;
