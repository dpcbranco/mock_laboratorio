const Exame = require('../models/ExameLab3');
const exameModel = require('mongoose').model('exameLab3', Exame, "exames");
const getExamesPorPaciente = async (cpf) => {
    return await exameModel.find({
        paciente: cpf
    })
}

const saveExamFile = (req, res) => {
    
}

module.exports = {
    getExamesPorPaciente, saveExamFile
};