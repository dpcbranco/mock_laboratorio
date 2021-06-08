const TipoExame = require('../models/TipoExame');
const tipoExameModel = require('mongoose').model('tipoExame', TipoExame, "tipoExames");

const getTypeById = async (id) => {
    return await tipoExameModel.findOne({ _id: id });
};

module.exports = {
    getTypeById
}