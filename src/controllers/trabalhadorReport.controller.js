const trabalhadorReportService = require('../services/trabalhador-report.service')

const relatorio = async function(req, res, next) {
    try {
        const itens = await trabalhadorReportService.relatorio(req.query)
        res.send(itens)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    relatorio: relatorio
}