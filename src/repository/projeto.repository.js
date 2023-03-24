const { Projeto, sequelize } = require('../database/models')
const { QueryTypes } = require('sequelize');
const { pesquisarPorQuery } = require('./dependente.repository');

const criar = async function(projeto) {
    const projetoCriado = await Projeto.create(projeto);
    return projetoCriado;
}

const criarVariosProjetos = async function(projetos) {
    const projetosCriados = await Projeto.bulkCreate(projetos)
    return projetosCriados;
}

const pesquisarTodosProjetos = async function() {
   const projetos = await Projeto.findAll();
   return projetos;
}

const pesquisarProjetoPorId = async function(id) {
    const projeto = await Projeto.findByPk(id);
    return projeto;
}

const pesquisarProjetoPorWhere = async function(nome) {
    const projetoPesquisado = await Projeto.findOne({ where : nome });
    return projetoPesquisado;
}

const pesquisarProjetoPorQuery = async function(projeto) {
    const projetoPesquisado = Object.values(projeto)

    const projetoRetornado = await sequelize.query(
        'SELECT * FROM projetos WHERE nome LIKE :nome',
        {
            replacements: { nome: `%${projetoPesquisado}%` },
            type: QueryTypes.SELECT
        }
    );

    return projetoRetornado;
}

const deletarProjeto = async function(id) {
    return await Projeto.destroy({
        where : {
            id: id
        }
    })
}

module.exports = {
    criar: criar,
    criarVariosProjetos: criarVariosProjetos,
    pesquisarTodosProjetos: pesquisarTodosProjetos,
    pesquisarProjetoPorId: pesquisarProjetoPorId,
    pesquisarProjetoPorWhere: pesquisarProjetoPorWhere,
    pesquisarProjetoPorQuery: pesquisarProjetoPorQuery,
    deletarProjeto: deletarProjeto
}