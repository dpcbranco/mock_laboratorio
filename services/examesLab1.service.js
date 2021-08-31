const Exame = require('../models/ExameLab1');
const {connection, mongo} = require('mongoose');
const exameModel = require('mongoose').model('exameLab1', Exame, 'exames');

const getExamesPorPaciente = async (cpf) => {
    return await exameModel.find({
        'paciente.cpf': cpf
    });
};

const getExameById = async (id) => {
    return await exameModel.findById(id);
};

const saveExamFile = async (req) => {
    const gfs = new mongo.GridFSBucket(connection.db, {bucketName: 'arquivos'});
    const uploadStream =  gfs.openUploadStream(
        req.file.originalname,
        { contentType: req.file.mimetype }
    );

    return req.pipe(
        uploadStream.on('finish', (savedFile) =>  {
            return savedFile; 
        })
            .on('error', (error) => error)
    );
};

const updateExame = async (exame) => {
    const exameDB = await exameModel.updateOne({_id: exame._id}, exame);
    return exameDB.ok;
};

module.exports = {
    getExamesPorPaciente, getExameById, saveExamFile, updateExame
};