'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dependente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dependente.init({
    nome: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dta_nasc: DataTypes.STRING,
    parentesco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dependente',
  });
  return Dependente;
};