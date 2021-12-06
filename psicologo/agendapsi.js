const { con } = require("../source/mysql")

module.exports = {
    agendaPsi: (request, response, next) => {

        const { day, hours, idPsi, idPac } = request.body

        // console.log(day, hours, idPsi, idPac)

        const insertAgenda = `INSERT INTO TBL_AGENDA(psi_in_codigo, pa_in_codigo, age_dia_agendado, age_hora_agendado)
                            VALUES(?,?,?,?)`
       
            con.query(insertAgenda, [idPsi, idPac, hours, day], (err, result) => {
                console.log(err)
                console.log(result)
            })

    }
}

