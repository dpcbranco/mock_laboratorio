const Medico = require('../models/Medico');
const medicoModel = require('mongoose').model('medico', Medico);

const getMedicoByCrm = async (crm) => {
    return await medicoModel.findOne({crm});
}

module.exports = {
    getMedicoByCrm
}