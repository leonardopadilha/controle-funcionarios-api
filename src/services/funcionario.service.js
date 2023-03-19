const funcionarioRepository = require('../repository/funcionario.repository');
const createError = require('http-errors');

const criar = async function(funcionario) {
    const funcionarioCriado = await funcionarioRepository.criar(funcionario);
    return funcionarioCriado;
}

const pesquisarTodosFuncionarios = async function() {
    const funcionarios = await funcionarioRepository.pesquisarTodosFuncionarios();

    if (funcionarios.lenght === 0) {
        return createError(400, "Funcionarios não cadastrados")
    }
    return funcionarios;
}

const pesquisarFuncionarioPorId = async function(id) {
    const funcionario = await funcionarioRepository.pesquisarFuncionarioPorId(id)

    if (!funcionario) {
        throw createError(404, `${id} não encontrado`)
    }
    return funcionario;
}

module.exports = {
    criar: criar,
    pesquisarTodosFuncionarios: pesquisarTodosFuncionarios,
    pesquisarFuncionarioPorId: pesquisarFuncionarioPorId
}

