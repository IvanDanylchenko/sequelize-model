'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 32],
        },
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 32],
        },
      },
      yearOfproduction: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      ramSize: { type: DataTypes.INTEGER, allowNull: false },
      cpu: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 64],
        },
      },
      displaySize: {
        type: DataTypes.INTEGER,
        // type: DataTypes.FLOAT(3, 2), - не работает
        allowNull: false,
        // validate: { isFloat: true },
      },
      moduleNFC: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};
