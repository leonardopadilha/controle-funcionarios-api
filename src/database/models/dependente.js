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
      Dependente.belongsTo(models.Funcionario, {
        foreignKey: 'cod_func',
        as: 'funcionarios'
      })
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
    tableName: 'dependentes',
    paranoid: true
  });
  return Dependente;
};