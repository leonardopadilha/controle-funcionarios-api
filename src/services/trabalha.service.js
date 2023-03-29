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

const pesquisarDadosTrabalhador = async function() {
    const infoTrabalhadores = await trabalhaRepository.pesquisarDadosTrabalhador()

    if (infoTrabalhadores.length === 0) {
        return createError(400, "Informações não cadastrados")
    }

    return infoTrabalhadores;
}


