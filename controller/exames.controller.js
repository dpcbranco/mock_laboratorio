const Grid = require('gridfs-stream');

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

const uploadExames = async (req, res) => {
    const exame = await exameService.getExamesPorPaciente(req.params.examId)[0];
    if (!exame)
        return res.status(404).send({error: "Exam not found"})

    const savedFile = exameService.saveExamFile(req, res);

    if (savedFile.error)
        return res.status(500).send(savedFile);

    exame.arquivos ? exame.arquivos.add(savedFile._id) : exame.arquivos = [savedFile._id]
    
    return await exameService.updateExame(exame);
}

module.exports = {
    getAllExames, uploadExames
}
