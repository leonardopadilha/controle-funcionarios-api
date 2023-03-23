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

const pesquisarPorQuery = async function(dependente) {
    const dependentePesquisado = await dependenteRepository.pesquisarPorQuery({nome: dependente.nome})

    if (dependentePesquisado.length === 0) {
        return createError(400, "Dependentes não cadastrados")
    }

    return dependentePesquisado
}

const criarVariosDependentes = async function(dependentes) {
    let dependentesCriados = "";
    const arrayDependentes = [];

    for(let i = 0; i < dependentes.length; i++) {
        const dependentesPesquisados = await dependenteRepository.pesquisarPorWhere({nome: dependentes[i].nome});

        if (dependentesPesquisados) {
            return createError(409, `${i + 1}º dependente (${dependentes[i].nome}) já cadastrado`)
        } else {
            dependentesCriados = await dependenteRepository.criar(dependentes[i])
            arrayDependentes.push(dependentesCriados)
        }
    };

    return arrayDependentes;    
}

module.exports = {
    criar: criar,
    pesquisarPorId: pesquisarPorId,
    pesquisarTodosDependentes: pesquisarTodosDependentes,
    pesquisarPorQuery: pesquisarPorQuery,
    criarVariosDependentes: criarVariosDependentes
}