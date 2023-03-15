'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Departamento.hasMany(models.Funcionario, {
        foreignKey: 'nro_depto',
        as: 'funcionarios'
      })

      Departamento.hasMany(models.Projeto, {
        foreignKey: 'nro_departamento',
        as: 'projetos'
      })
    }
  }
  Departamento.init({
    cod_gerente: DataTypes.INTEGER,
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Departamento',
    tableName: 'departamentos',
    paranoid: true
  });
  return Departamento;
};