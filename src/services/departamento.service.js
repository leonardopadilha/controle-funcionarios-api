const departamentoRepository = require('../repository/departamento.repository')
const createError = require('http-errors');

const criar = async function(departamento) {
    const departamentoCriado = await departamentoRepository.criar(departamento)
    return departamentoCriado;
}

module.exports = {
    criar: criar
}