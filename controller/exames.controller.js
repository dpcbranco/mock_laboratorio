const getAllExames = (req, res) => {
    if (!req.query.paciente) 
        return res.status(400).send({error: "Paciente não informado"})
    if (req.query.paciente !== 'batata')
        return res.status(404).send({error: "Paciente não encontrado"});
    
    return res.send({exame: "Exame teste"});
}

module.exports = {
    getAllExames,
}