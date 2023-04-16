const trabalhadorReportRepository = require('../repository/trabalhador-report.repository')

const relatorio = async function(filtros) {
    const itens = await trabalhadorReportRepository.relatorio(filtros)
    return itens
}

module.exports = {
    relatorio: relatorio
}