'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cargo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cargo.hasMany(models.Funcionario, {
        foreignKey: 'nro_cargo',
        as: 'funcionarios'
      })
    }
  }
  Cargo.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cargo',
    tableName: 'cargos',
    paranoid: true
  });
  return Cargo;
};