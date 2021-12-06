const { con } = require("../source/mysql")

module.exports = {

    deleteHours: (req, res, send) => {

        const { Hour, IdPsi, dayWeekend } = req.params

        const delHourSeg = "delete from tbl_segunda where psi_in_codigo = ?  and hr_segunda = ?"
        const delHourTer = "delete from tbl_terca where psi_in_codigo = ?  and hr_terca = ?"
        const delHourQua = "delete from tbl_quarta where psi_in_codigo = ?  and hr_quarta = ?"
        const delHourQui = "delete from tbl_quinta where psi_in_codigo = ?  and hr_quinta = ?"
        const delHourSex = "delete from tbl_sexta where psi_in_codigo = ?  and hr_sexta = ?"

        try {

            if (dayWeekend == "seg") {
               
                con.query(delHourSeg, [IdPsi, Hour], (err, result) => {
                    console.log(err)
                    console.log(result)
                })
                
            }

        } catch (err) {
            console.log(err)
        }


        try {

            if (dayWeekend == "ter") {
               
                con.query(delHourTer, [IdPsi, Hour], (err, result) => {
                    console.log(err)
                    console.log(result)
                })

            }

        } catch (err) {
            console.log(err)
        }


        try {

            if (dayWeekend == "qua") {
              
                con.query(delHourQua, [IdPsi, Hour], (err, result) => {
                    console.log(err)
                    console.log(result)
                })

            }

        } catch (err) {
            console.log(err)
        }


        try {

            if (dayWeekend == "qui") {
                
                con.query(delHourQui, [IdPsi, Hour], (err, result) => {
                    console.log(err)
                    console.log(result)
                })

            }

        } catch (err) {
            console.log(err)
        }


        try {
            
            if (dayWeekend == "sex") {

                con.query(delHourSex, [IdPsi, Hour], (err, result) => {
                    console.log(err)
                    console.log(result)
                })

            }

        } catch (err) {
            console.log(err)
        }

    }

}