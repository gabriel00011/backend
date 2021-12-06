const { con } = require("../source/mysql")

module.exports = {
    updatePsicologo: (req, res, next) => {

        const {
            email, pass, passconfirm,
            nome, sobrenome, cpf,
            telefone, celular,
            cep,
            rua, numero, complemento,
            bairro, cidade, estado } = req.body

        console.log(email, pass, passconfirm,
            nome, sobrenome, cpf,
            telefone, celular,
            cep,
            rua, numero, complemento,
            bairro, cidade, estado)

    }
}
