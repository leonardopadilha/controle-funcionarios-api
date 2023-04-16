const expres = require('express')
const router = expres.Router()

const trabalhadorReportService = require('../controllers/trabalhadorReport.controller')

router
    .get('/demandas/trabalhador', trabalhadorReportService.relatorio)

module.exports = router