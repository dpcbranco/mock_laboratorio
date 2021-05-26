const router = require('express').Router()
const examesController = require('../controller/exames.controller')

router.get('/', examesController.getAllExames);

module.exports = router;