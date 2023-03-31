const trabalhaRepository = require('../repository/trabalha.repository');
const createError = require('http-errors')

const criar = async function(dadosTrabalhador) {
    const existeTrabalhador = await trabalhaRepository.pesquisarDadosTrabalhadorPorQuery({cod_func: dadosTrabalhador.cod_func});

    if (existeTrabalhador) {
        return createError(409, 'Informações já cadastradas')
    }

    const infoTrabalhador = await trabalhaRepository.criar(dadosTrabalhador);
    return infoTrabalhador;
}

const criarVariosRegistros = async function(infoTrabalhadores) {
    
    const arrayTrabalhadores = [];
    for (let i = 0; i < infoTrabalhadores.length; i++) {
        const existeTrabalhador = await trabalhaRepository.pesquisarDadosTrabalhadorPorId(infoTrabalhadores[i].cod_func)

        if (existeTrabalhador) {
            return createError(409, `O id ${infoTrabalhadores[i].cod_func} já existe`)
        } else {
            let dadosTrabalhadores = await trabalhaRepository.criar(infoTrabalhadores[i]);
            arrayTrabalhadores.push(dadosTrabalhadores);
        }
    }

    return arrayTrabalhadores;
}

const pesquisarDadosTrabalhadorPorId = async function(id) {
    const infoTrabalhador = await trabalhaRepository.pesquisarDadosTrabalhadorPorId(id)

    if (!infoTrabalhador) {
        return createError(404, `O id ${id} não foi encontrado`)
    }

    return infoTrabalhador;
}

const pesquisarDadosTrabalhador = async function() {
    const infoTrabalhadores = await trabalhaRepository.pesquisarDadosTrabalhador()

    if (infoTrabalhadores.length === 0) {
        return createError(400, "Informações não cadastrados")
    }

    return infoTrabalhadores;
}

const pesquisarDadosTrabalhadorPorQuery = async function(infoTrabalhador) {
    const dadosTrabalhador = await trabalhaRepository.pesquisarDadosTrabalhadorPorQuery({ cod_func: infoTrabalhador.cod_func})

    if (dadosTrabalhador.length === 0) {
        return createError(400, "Informações não cadastradas")
    }

    return dadosTrabalhador;
}

const deletarRegistros = async function(id) {
    const infoTrabalhador = await trabalhaRepository.pesquisarDadosTrabalhadorPorId(id);

    if (!infoTrabalhador) {
        return createError(404, `Desculpe, o id ${id} não foi encontrado`)
    }

    const dadosTrabalhador = await trabalhaRepository.deletarRegistros(id);
    return dadosTrabalhador;
}

const deletarRegistrosForcado = async function(id) {
    const infoTrabalhador = await trabalhaRepository.pesquisarDadosTrabalhadorPorId(id);

    if (!infoTrabalhador) {
        return createError(404, `Desculpe, o id ${id} não foi encontrado`)
    }

    const dadosTrabalhador = await trabalhaRepository.deletarRegistrosForcado(id);
    return dadosTrabalhador;
}

module.exports = {
    criar: criar,
    criarVariosRegistros: criarVariosRegistros,
    pesquisarDadosTrabalhadorPorId: pesquisarDadosTrabalhadorPorId,
    pesquisarDadosTrabalhador: pesquisarDadosTrabalhador,
    pesquisarDadosTrabalhadorPorQuery: pesquisarDadosTrabalhadorPorQuery,
    deletarRegistros: deletarRegistros,
    deletarRegistrosForcado: deletarRegistrosForcado
}


