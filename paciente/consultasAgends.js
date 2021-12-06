const { con } = require("../source/mysql")


module.exports = {

    consultasAgends: (request, response, next) => {

        const { idPac } = request.body

        console.log("id do paciente", idPac)

        const whereAgends = `select psi_st_nome, psi_st_crp, age_dia_agendado, age_hora_agendado from tbl_agenda
        INNER JOIN tbl_psicologo
        ON tbl_agenda.psi_in_codigo = tbl_psicologo.psi_in_codigo
        INNER JOIN tbl_paciente
        on tbl_agenda.pa_in_codigo = tbl_paciente.pa_in_codigo
        where tbl_agenda.pa_in_codigo = ?`

        con.query(whereAgends, [idPac], (err, result) => {
            response.json(result)
        })

    }

}