const {getExamesPorPaciente} = require('../services/exames.service');
const getAllExames = async (req, res) => {
    const exames = await getExamesPorPaciente(req.query.paciente);
    if (exames.length === 0)
        return res.status(404).send({error: "Paciente sem exames"})
    return res.send(exames);
}

module.exports = {
    getAllExames,
}
