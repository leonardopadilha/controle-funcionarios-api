const departamentoRepository = require('../repository/departamento.repository')
const createError = require('http-errors');

const criar = async function(departamento) {

    const existeDepartamento = await departamentoRepository.encontrarDepartamentoPorWhere({ nome: departamento.nome})

    if (existeDepartamento) {
        return createError(409, 'Departamento já cadastrado')
    }

    const departamentoCriado = await departamentoRepository.criar(departamento)
    return departamentoCriado;
}

const encontrarDepartamentos = async function() {
    const departamentos = await departamentoRepository.encontrarDepartamentos()

    if (departamentos.lenght === 0) {
        return createError(400, "Cargos não cadastrados")
    }

    return departamentos;
}

const encontrarDepartamentoPorId = async function(id) {
    const departamento = await departamentoRepository.encontrarDepartamentoPorId(id)

    if (!departamento) {
        throw createError(404, `${id} não encontrado`)
    }

    return departamento;
}

const deletarDepartamento = async function(id) {
    const departamento = await departamentoRepository.encontrarDepartamentoPorId(id);

    if (!departamento) {
        throw createError(404, `Desculpe, o id ${id} não foi encontrado`)
    }

    await departamentoRepository.deletarDepartamento(id)
    return departamento;
}

module.exports = {
    criar: criar,
    encontrarDepartamentoPorId: encontrarDepartamentoPorId,
    encontrarDepartamentos: encontrarDepartamentos,
    deletarDepartamento: deletarDepartamento
}