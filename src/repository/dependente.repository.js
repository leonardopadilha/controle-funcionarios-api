const { Dependente } = require('../database/models/index');

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
}