const Exame = require('../models/ExameLab1');
const {connection, mongo} = require('mongoose');
const ObjectId = require('mongoose').mongo.ObjectId;
const exameModel = require('mongoose').model('exameLab1', Exame, 'exames');

const getExamesPorPaciente = async (cpf) => {
    return await exameModel.find({
        'paciente.cpf': cpf
    });
};

const getExameById = async (id) => {
    return await exameModel.findById(id);
};

const fileUploadStream = async (fileName, mimeType) => {
    const gfs = new mongo.GridFSBucket(connection.db, {bucketName: 'arquivos'});
    return gfs.openUploadStream(
        fileName,
        { contentType: mimeType }
    );

};

const fileDownloadStream = async (objectId) => {
    const gfs = new mongo.GridFSBucket(connection.db, {bucketName: 'arquivos'});
    return gfs.openDownloadStream(objectId);
};

const findFileById = async (id) => {
    const gfs = new mongo.GridFSBucket(connection.db, {bucketName: 'arquivos'});
    const result = await gfs.find({_id: ObjectId(id)}).toArray();
    return result[0];
};

const updateExame = async (exame) => {
    return await exame.save();
};

module.exports = {
    getExamesPorPaciente,
    getExameById,
    fileUploadStream, 
    updateExame,
    fileDownloadStream,
    findFileById
};