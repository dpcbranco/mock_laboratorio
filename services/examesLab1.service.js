const Exame = require('../models/ExameLab1');
const {connection, mongo} = require('mongoose');
const Grid = require('gridfs-stream');
const fs = require('fs');
const exameModel = require('mongoose').model('exameLab1', Exame, "exames");

const getExamesPorPaciente = async (cpf) => {
    return await exameModel.find({
        "paciente.cpf": cpf
    })
}

const getExameById = async (id) => {
    return await exameModel.findbyId(id);
}

const saveExamFile = async (req, res) => {
    const gfs = Grid(connection.db, mongo);
    const filename = req.file.originalname;

    gfs.collection("arquivos");

    return req.pipe(
        gfs.createWriteStream({ filename: req.file.originalname, metadata: { exameId: req.params.examId } })
            .on('close', (savedFile) =>  savedFile)
            .on('error', (error) => error)
    );
}

const updateExame = async (exame) => {
    return await exameModel.update(exame);
}

module.exports = {
    getExamesPorPaciente, getExameById, saveExamFile, updateExame
};