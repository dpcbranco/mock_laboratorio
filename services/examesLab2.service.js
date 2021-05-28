const Exame = require('../models/ExameLab2');
const exameModel = require('mongoose').model('exameLab2', Exame, "exames");
const getExamesPorPaciente = async (cpf) => {
    return await exameModel.find({
        "paciente.cpf": cpf
    })
}

module.exports = {
    getExamesPorPaciente
};