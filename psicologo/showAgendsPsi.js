const { con } = require("../source/mysql")


module.exports = {
    showAgendaPsi: (request, response, next) => {

        const { idPsi } = request.body

        console.log("será que está chegando o id" + idPsi)

        const getDataAgends = `select * from tbl_agenda A
                              inner join tbl_paciente P
                              on A.pa_in_codigo = P.pa_in_codigo
                              where A.psi_in_codigo = ?
                              `
        con.query(getDataAgends, [idPsi], (err, result) => {
            console.log(err)
            console.log(result)
            response.json(result)
        })

    }
}