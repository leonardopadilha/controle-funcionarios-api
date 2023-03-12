const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionario.controller');

router
    .get('/', funcionarioController.create)

module.exports = router;