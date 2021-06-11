const medicoService = require('../services/medico.service')

const getMedicoByCrm = async (req, res) => {
    const medico = await medicoService.getMedicoByCrm(req.params.crm);
    return  medico ? 
            res.send(medico) : 
            res.status(404).send({message: "Medico não encontrado"});
}

module.exports = {
    getMedicoByCrm
}