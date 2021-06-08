const TipoExame = require('../models/TipoExame');
const tipoExameModel = require('mongoose').model('tipoExame', TipoExame, "tipoExames");

const getTypeById = async (id) => {
    return await tipoExameModel.findOne({ nome: Number.parseInt(id) });
};

module.exports = {
    getTypeById
}