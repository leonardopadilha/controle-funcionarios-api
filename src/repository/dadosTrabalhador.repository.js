const { Funcionario, Dependente } = require('../database/models/index')

const pesquisarTodosDadosTrabalhadorPorId = async function(id) {
    const dadosTrabalhador = await Funcionario.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: Dependente,
                as: 'dependentes',
                required : true,
                attributes: ['id', 'nome', 'sexo', 'parentesco', 'dta_nasc']
            }
        ]
    });

    return dadosTrabalhador;
}

module.exports = {
    pesquisarTodosDadosTrabalhadorPorId: pesquisarTodosDadosTrabalhadorPorId
}

