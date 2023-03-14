'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trabalha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Trabalha.init({
    num_horas_sem: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trabalha',
  });
  return Trabalha;
};