const router = require('express').Router()
const examesController = require('../controller/exames.controller')
const utils = require('../utils/paciente.utils');

router.get('/', utils.isValidCPF, examesController.getAllExames);

module.exports = router;
