const exameService = process.env.LAB == 1 ? require('../services/examesLab1.service'):
                     process.env.LAB == 2 ? require('../services/examesLab2.service'):
                     process.env.LAB == 3 ? require('../services/examesLab3.service'):
                     null;
const getAllExames = async (req, res) => {
    const exames = await exameService.getExamesPorPaciente(req.query.paciente);
    if (exames.length === 0)
        return res.status(404).send({error: "Paciente sem exames"})
    return res.send(exames);
}

module.exports = {
    getAllExames,
}
