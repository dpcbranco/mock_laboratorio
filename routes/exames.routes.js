const router = require('express').Router();
const multer = require('multer');
const examesController = require('../controller/exames.controller');
const utils = require('../utils/paciente.utils');

const upload = multer();

router.get('/', utils.isValidCPF, examesController.getAllExames);
router.get('/:exameId', examesController.getExameById);
router.post('/upload/:exameId', upload.single('examFile') , examesController.uploadExames);

module.exports = router;
