const tipoExameService = require('../services/tipoExames.service')

const getTipoExame = async (req, res) => {
    const tipoExame = await tipoExameService.getTypeById(req.params.id);
    if (!tipoExame) return res.status(404).send({message: "Tipo de exame não encontrado"});
    return res.send(tipoExame)
}

module.exports = {
    getTipoExame
}