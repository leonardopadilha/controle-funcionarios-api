const { Funcionario } = require('../database/models/index')

const criar = async function(funcionario) {
    const funcionarioCriado = await Funcionario.create(funcionario)
    return funcionarioCriado;
}

const pesquisarTodosFuncionarios = async function() {
    const funcionarios = await Funcionario.findAll();
    return funcionarios;
}

const pesquisarFuncionarioPorId = async function(id) {
    const funcionario = await Funcionario.findbyPk(id);
    return funcionario;
}

module.exports = {
    criar: criar,
    pesquisarTodosFuncionarios: pesquisarTodosFuncionarios,
    pesquisarFuncionarioPorId: pesquisarFuncionarioPorId
}