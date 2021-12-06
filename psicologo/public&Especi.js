const { con } = require("../source/mysql")

module.exports = {
    InsertPublicEspecial: (request, response, next) => {

        const { idPsi, especial, publi } = request.body

        console.log("resultado de endereco",idPsi, especial, publi)

        const insertPublic = "INSERT INTO tbl_atuacao(psi_in_codigo, atu_se_especialidade, atu_se_publico) values(?,?,?)"

        con.query(insertPublic, [idPsi, especial, publi], (err, result) => {
            console.log(err)
            console.log(result)
        })
    }
}