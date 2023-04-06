const dadosTrabalhadorRepository = require('../repository/dadosTrabalhador.repository')
const createError = require('http-errors');

const pesquisarTodosDadosTrabalhadorPorId = async function(id) {
    const infoTrabalhador = await dadosTrabalhadorRepository.pesquisarTodosDadosTrabalhadorPorId(id)

    if (!infoTrabalhador) {
        return createError(404, 'Informações não encontradas')
    }

    return infoTrabalhador;
}

module.exports = {
    pesquisarTodosDadosTrabalhadorPorId: pesquisarTodosDadosTrabalhadorPorId
}