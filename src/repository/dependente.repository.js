const { Dependente, sequelize } = require('../database/models/index');
const { QueryTypes } = require('sequelize')

const criar = async function(dependente) {
    const dependenteCriado = await Dependente.create(dependente);
    return dependenteCriado;
}

const pesquisarTodosDependentes = async function() {
    const dependentes = await Dependente.findAll();
    return dependentes;
}

const pesquisarPorId = async function(id) {
    const dependente = await Dependente.findByPk(id);
    return dependente;
}

const pesquisarPorWhere = async function(nome) {
    const dependente = await Dependente.findOne({ where: nome });
    return dependente;
}

const pesquisarPorQuery = async function(dependente) {
    const dependentePesquisado = Object.values(dependente)


    const dependenteEncontrado = await sequelize.query(
        'SELECT * FROM dependentes WHERE nome LIKE :nome',
        {
            replacements: {nome: `%${dependentePesquisado}%`},
            type: QueryTypes.SELECT
        }
    );
    return dependenteEncontrado
}

const criarVariosDependentes = async function(dependentes) {
    const dependentesCriados = await Dependente.bulkCreate(dependentes);
    return dependentesCriados;
}

module.exports = {
    criar: criar,
    pesquisarTodosDependentes: pesquisarTodosDependentes,
    pesquisarPorId: pesquisarPorId,
    pesquisarPorWhere: pesquisarPorWhere,
    criarVariosDependentes: criarVariosDependentes,
    pesquisarPorQuery: pesquisarPorQuery
}