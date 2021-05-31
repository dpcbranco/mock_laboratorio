const Exame = require('../models/ExameLab1');
const exameModel = require('mongoose').model('exameLab1', Exame, "exames");
const getExamesPorPaciente = async (cpf) => {
    return await exameModel.find({
        "paciente.cpf": cpf
    })
}

module.exports = {
    getExamesPorPaciente
};