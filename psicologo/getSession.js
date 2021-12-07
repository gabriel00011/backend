const { con } = require("../source/mysql")

module.exports = {
    sessionPsicologo: (req, response, next) => {

        const { email } = req.params
        try {
            const get = "select * from tbl_psicologo where psi_st_email = (?)"
            const hoursSeg = "select * from tbl_segunda where psi_in_codigo = (?)"
            const hoursTer = "select * from tbl_terca where psi_in_codigo = (?)"
            const hoursQua = "select * from tbl_quarta where psi_in_codigo = (?)"
            const hoursQui = "select * from tbl_quinta where psi_in_codigo = (?)"
            const hoursSex = "select * from tbl_sexta where psi_in_codigo = (?)"
            const AgendaResult = `
                            select * from tbl_agenda A
                            inner join tbl_paciente P
                            on A.pa_in_codigo = P.pa_in_codigo
                            where A.psi_in_codigo = ?
                            limit 1
                            `

            con.query(get, [email], (err, resultado, fiels) => {

                const listItemIfy = JSON.stringify(resultado)
                const listItemParse = JSON.parse(listItemIfy)
                const Id_psicologo = listItemParse[0]?.psi_in_codigo
                console.log("id do psicologo " + Id_psicologo)

                con.query(hoursSeg, [Id_psicologo], (err, resultSeg) => {

                    con.query(hoursTer, [Id_psicologo], (err, resultTer) => {

                        con.query(hoursQua, [Id_psicologo], (err, resultQua) => {

                            con.query(hoursQui, [Id_psicologo], (err, resultQui) => {

                                con.query(hoursSex, [Id_psicologo], (err, resultSex) => {

                                    con.query(AgendaResult, [Id_psicologo], (err, resultAgends) => {

                                        response.json({ resultado, resultSeg, resultTer, resultQua, resultQui, resultSex, resultAgends }).status(200)

                                    })
                                })

                            })
                        })

                    })

                })
                
            })
        } catch (e) {
            console.log(e)
        }
    }
}


