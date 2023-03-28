const { Trabalha, sequelize } = require('../database/models/index');
const { QueryTypes } = require('sequelize')

const criar = async function(dadosTrabalhador) {
    const infoTrabalhador = await Trabalha.create(dadosTrabalhador);
    return infoTrabalhador;
}

const criarVariosRegistros = async function(infoTrabalhadores) {
    const dadosTrabalhadores = await Trabalha.bulkCreate(infoTrabalhadores);
    return dadosTrabalhadores;
}

const pesquisarDadosTrabalhador = async function() {
    const infoTrabalhador = await Trabalha.findAll();
    return infoTrabalhador;
}

const pesquisarDadosTrabalhadorPorId = async function(id) {
    const infoTrabalhador = await Trabalha.findByPk(id);
    return infoTrabalhador;
}

const pesquisarDadosTrabalhadorPorWhere = async function(idFuncionario) {
    const infoTrabalhador = await Trabalha.findOne({ where: idFuncionario })
    return infoTrabalhador;
}

const pesquisarDadosTrabalhadorPorQuery = async function(horasProjeto) {
    const horasProjetoPesquisado = Object.values(horasProjeto);

    const horasProjetoRetornado = await sequelize.query(
        'SELECT * FROM trabalha WHERE num_horas_sem >= :horas',
        {
            replacements: { horas: horasProjetoPesquisado },
            Type: QueryTypes.SELECT
        }
    );
}

const deletarRegistros = async function(idFuncionario) {
    return await Trabalha.destroy({ 
        where: {
            id: id
        }
    })
}

const deletarRegistrosForcado = async function(idFuncionario) {
    return await Trabalha.destroy({
        where: {
            id: id
        },
        force: true
    })
}

module.exports = {
    criar: criar,
    criarVariosRegistros: criarVariosRegistros,
    pesquisarDadosTrabalhador: pesquisarDadosTrabalhador,
    pesquisarDadosTrabalhadorPorId: pesquisarDadosTrabalhadorPorId,
    pesquisarDadosTrabalhadorPorWhere: pesquisarDadosTrabalhadorPorWhere,
    pesquisarDadosTrabalhadorPorQuery: pesquisarDadosTrabalhadorPorQuery, 
    deletarRegistros: deletarRegistros,
    deletarRegistrosForcado: deletarRegistrosForcado
}