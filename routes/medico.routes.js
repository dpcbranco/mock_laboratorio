const router = require('express').Router();
const medicoController = require('../controller/medicos.controller');

router.get('/:crm', medicoController.getMedicoByCrm);

module.exports = router;