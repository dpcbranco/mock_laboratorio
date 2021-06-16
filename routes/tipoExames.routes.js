const router = require('express').Router();
const tipoExamesController = require('../controller/tipoExames.controller')

router.get('/:id', tipoExamesController.getTipoExame)

module.exports = router