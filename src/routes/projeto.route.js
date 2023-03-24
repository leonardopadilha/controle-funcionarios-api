const express = require('express');
const router = express.Router();

const projetoController = require('../controllers/projeto.controller');
const projetoValidator = require('../validators/projeto.validator')

router 
    .post('/', projetoValidator.criar(), projetoController.criar)
    .delete('/:id', projetoController.deletarProjetos)

module.exports = router;