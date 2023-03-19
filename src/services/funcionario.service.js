const funcionarioRepository = require('../repository/funcionario.repository');
const createError = require('http-errors');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

require('dotenv').config()

const login = async function(funcionario) {

   const funcionarioLogado = await funcionarioRepository.pesquisarFuncionarioPorWhere({ email: funcionario.email })

    if (!funcionarioLogado) {
        return createError(401, 'Funcionário não encontrado');
    }

    const comparaSenha = await bcrypt.compare(funcionario.senha, funcionarioLogado.senha)

    if (!comparaSenha) {
        return createError(401, 'Funcionário não encontrado');
    }

    const token = sign({
        id: funcionarioLogado.id
    }, process.env.SECRET)

    delete funcionarioLogado.senha;

    return {
        auth: true,
        funcionario: funcionarioLogado,
        token: token
    }
}

const criar = async function(funcionario) {

    const existeFuncionario = await funcionarioRepository.pesquisarFuncionarioPorWhere({email: funcionario.email})

    if (existeFuncionario) {
        return createError(409, 'Funcionário já existe')
    }
    funcionario.senha = await bcrypt.hash(funcionario.senha, ~~process.env.SALT);
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
    login: login,
    criar: criar,
    pesquisarTodosFuncionarios: pesquisarTodosFuncionarios,
    pesquisarFuncionarioPorId: pesquisarFuncionarioPorId
}

