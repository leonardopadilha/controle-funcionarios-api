const dependenteRepository = require('../repository/dependente.repository')
const createError = require('http-errors');

const criar = async function(dependente) {
    const existeDependente = await dependenteRepository.pesquisarPorWhere({ nome: dependente.nome});

    if (existeDependente) {
        return createError(409, 'Dependente já cadastrado')
    }

    const dependenteCriado = await dependenteRepository.criar(dependente);
    return dependenteCriado;
}

const pesquisarTodosDependentes = async function() {
    const dependentes = await dependenteRepository.pesquisarTodosDependentes();

    if (dependentes.length === 0) {
        return createError(400, "Dependentes não cadastrados")
    }

    return dependentes;
}

const pesquisarPorId = async function(id) {
    const dependente = await dependenteRepository.pesquisarPorId(id)

    if (!dependente) {
        return createError(404, `O id ${id} não foi encontrado`)
    }

    return dependente;
}

/* const pesquisarPorWhere = async function(nome) {

} */

module.exports = {
    criar: criar,
    pesquisarPorId: pesquisarPorId,
    pesquisarTodosDependentes: pesquisarTodosDependentes
}