const fileUtils = require('../utils/file.utils');

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
    const fileStream = fileUtils.bufferToStream(req.file.buffer);

    if (!exame)
        return res.status(404).send({error: 'Exam not found'});

    fileStream.pipe(uploadStream
        .on('finish', async (savedFile) =>  {
            exame.arquivos ? exame.arquivos.push(savedFile._id) : exame.arquivos = [savedFile.id];
            const updatedExame = await exameService.updateExame(exame); 
            return !updatedExame.errors ?
                res.send() : 
                res.status(500).send(
                    {message: 'Failed to update exam', errors: updatedExame.errors}
                );
        })
        .on('error', (error) => {return res.status(500).send(error);}));
            
};

const getExameFileById = async (req, res) => {
    let file;
    try {
        file = await exameService.findFileById(req.params.fileId);
    }catch(error){
        return res.status(400).send({error:'Invalid ID'})
    }
    
    if (!file)
        return res.status(404).send({error: 'File not found'});
    if (file.error)
        return res.status(500).send({error: file.error});

    res.set('content-type', file.contentType);
    res.set('Content-Disposition', 'inline; filename=' + file.filename);

    const downloadStream = await exameService.fileDownloadStream(file._id);
    downloadStream.pipe(res);
    downloadStream.on('readable', () => {
        const buffer = downloadStream.read();
        if (!buffer){
            return null;
        }
        res.write(buffer);
        return res.send();
    });
    
    downloadStream.on('error', () => {
        res.sendStatus(404);
    });
    
    downloadStream.on('end', () => {
        res.end();
    });

};

module.exports = {
    getAllExames, uploadExames, getExameById, getExameFileById
};
