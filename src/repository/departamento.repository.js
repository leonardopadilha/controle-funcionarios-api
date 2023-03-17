const { Departamento } = require('../database/models/index');

const criar = async function(departamento) {
    const departamentoCriado = await Departamento.create(departamento);
    return departamentoCriado;
}

const encontrarDepartamentos = async function() {
    const departamentos = await Departamento.findAll()
    return departamentos;
}

const encontrarDepartamentoPorId = async function(id) {
    const departamento = await Departamento.findByPk(id);
    return departamento;
}

const encontrarDepartamentoPorWhere = async function(departamento) {
    const departamentoEncontrado = await Departamento.findOne({ where : departamento })
    return departamentoEncontrado;
}

const deletarDepartamento = async function (id) {
    return await Departamento.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    criar: criar,
    encontrarDepartamentos: encontrarDepartamentos,
    encontrarDepartamentoPorId: encontrarDepartamentoPorId,
    encontrarDepartamentoPorWhere: encontrarDepartamentoPorWhere,
    deletarDepartamento: deletarDepartamento
}