'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projeto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Projeto.belongsTo(models.Departamento, {
        foreignKey: 'nro_departamento',
        as: 'departamentos'
      })

      Projeto.hasMany(models.Trabalha, {
        foreignKey: 'num_proj',
        as: 'trabalha'
      })
    }
  }
  Projeto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projeto',
    tableName: 'projetos',
    paranoid: true
  });
  return Projeto;
};