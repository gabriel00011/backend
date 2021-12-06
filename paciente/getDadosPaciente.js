const { con } = require("../source/mysql")

module.exports = {

    getDadosPaciente: (req, res, next) => {

        const { email } = req.params

        console.log(email)

        const dadosPaciente = "select * from tbl_paciente where pa_st_email = ?"

        con.query(dadosPaciente, [email], (err, result) => {
            res.json(result)
        })
    }
}