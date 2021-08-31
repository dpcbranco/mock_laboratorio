const exameService = 
    process.env.LAB == 1 ? require('../services/examesLab1.service'):
        process.env.LAB == 2 ? require('../services/examesLab2.service'):
            process.env.LAB == 3 ? require('../services/examesLab3.service'):
                null;

const getAllExames = async (req, res) => {
    const exames = await exameService.getExamesPorPaciente(req.query.paciente);
    if (exames.length === 0)
        return res.status(404).send({error: 'Paciente sem exames'});
    return res.send(exames);
};

const getExameById = async (req, res) => {
    return res.send(await exameService.getExameById(req.params.exameId));
};

const uploadExames = async (req, res) => {
    const exame = await exameService.getExameById(req.params.exameId);
    const uploadStream = await exameService.fileUploadStream(
        req.file.originalname, req.file.mimetype
    );

    if (!exame)
        return res.status(404).send({error: 'Exam not found'});

    req.pipe(
        uploadStream
            .on('finish', async (savedFile) =>  {
                exame.arquivos ? exame.arquivos.push(savedFile._id) : exame.arquivos = [savedFile.id];
                const updatedExame = await exameService.updateExame(exame); 
                return !updatedExame.errors ?
                    res.send() : 
                    res.status(500).send(
                        {message: 'Failed to update exam', errors: updatedExame.errors}
                    );
            })
            .on('error', (error) => {return res.status(500).send(error);})
    );

};

module.exports = {
    getAllExames, uploadExames, getExameById
};
