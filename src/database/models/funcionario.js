'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Funcionario.hasMany(models.Dependente, {
        foreignKey: 'cod_func',
        as: 'dependentes'
      })

      Funcionario.belongsTo(models.Cargo, {
        foreignKey: 'nro_cargo',
        as: 'cargos'
      })

      Funcionario.belongsTo(models.Departamento, {
        foreignKey: 'nro_depto',
        as: 'departamentos'
      })

      Funcionario.hasMany(models.Trabalha, {
        foreignKey: 'cod_func',
        as: 'trabalha'
      })
    }
  }
  Funcionario.init({
    nome: DataTypes.STRING,
    sexo: DataTypes.STRING,
    dta_nasc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Funcionario',
    tableName: 'funcionarios',
    paranoid: true
  });
  return Funcionario;
};