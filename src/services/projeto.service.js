const projetoRepository = require('../repository/projeto.repository');
const createError = require('http-errors')

const criar = async function(projeto) {

    const existeProjeto = await projetoRepository.pesquisarProjetoPorWhere({ nome: projeto.nome })

    if (existeProjeto) {
        return createError(409, 'Projeto já cadastrado')
    }

    const projetoCadastrado = await projetoRepository.criar(projeto);
    return projetoCadastrado;
}

const criarVariosProjetos = async function(projeto) {

    let projetosCriados = "";
    const arrayprojetos = [];

    for (let i = 0; i < projeto.length; i++) {
    
        const projetosPesquisados = await projetoRepository.pesquisarProjetoPorWhere({ nome: projeto[i].nome })

        if (projetosPesquisados) {
            return createError(409, `Projeto ${projeto[i].nome} já cadastrado`)
        } else {
            projetosCriados = await projetoRepository.criar(projeto[i])
            arrayprojetos.push(projetosCriados);
        }
    }

    return arrayprojetos;
}

const pesquisarTodosProjetos = async function() {
    const projetos = await projetoRepository.pesquisarTodosProjetos();

    if (projetos.length === 0) {
        return createError(400, "Dependentes não cadastrados")
    }

    return projetos
}

const pesquisarProjetoPorId = async function(id) {
    const projeto = await projetoRepository.pesquisarProjetoPorId(id)

    if (!projeto) {
        return createError(404, `O id ${id} não foi encontrado`)
    }

    return projeto;
}

const pesquisarProjetoPorQuery = async function(projeto) {
    const projetoPesquisado = await projetoRepository.pesquisarProjetoPorQuery({ nome: projeto.nome})

    if (projetoPesquisado.length === 0) {
        return createError(400, "Projeto não cadastrado")
    }

    return projetoPesquisado
}

const deletarProjeto = async function(id) {
    const projeto = await projetoRepository.pesquisarProjetoPorId(id)

    if (!projeto) {
        return createError(404, `Desculpe, o id ${id} não foi encontrado`)
    }

    await projetoRepository.deletarProjeto(id);
    return projeto;
}

const deletarProjetoParaValer = async function(id) {
    const projeto = await projetoRepository.pesquisarProjetoPorId(id)

    if (!projeto) {
        return createError(404, `Desculpe, o id ${id} não foi encontrado`)
    }

    await projetoRepository.deletarProjetoParaValer(id);
    return projeto;
}

module.exports = {
    criar: criar,
    criarVariosProjetos: criarVariosProjetos,
    pesquisarTodosProjetos: pesquisarTodosProjetos,
    pesquisarProjetoPorId: pesquisarProjetoPorId,
    pesquisarProjetoPorQuery: pesquisarProjetoPorQuery,
    deletarProjeto: deletarProjeto,
    deletarProjetoParaValer: deletarProjetoParaValer
}