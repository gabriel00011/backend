const { con } = require("../source/mysql")


module.exports = {

    updateHours: (req, res, next) => {

        const { oldHour, newHour, idPsi, dayWeekend } = req.params

        console.log("result")
        console.log(oldHour, newHour, idPsi, dayWeekend)



        const updateHourSeg = "update tbl_segunda set hr_segunda = ? where psi_in_codigo = ? and hr_segunda = ?"
        const updateHourTer = "update tbl_terca set hr_terca = ? where psi_in_codigo = ? and hr_terca = ?"
        const updateHourQua = "update tbl_quarta set hr_quarta = ? where psi_in_codigo = ? and hr_quarta = ?"
        const updateHourQui = "update tbl_quinta set hr_quinta = ? where psi_in_codigo = ? and hr_quinta = ?"
        const updateHourSex = "update tbl_sexta set hr_sexta = ? where psi_in_codigo = ? and hr_sexta = ?"

        try {

            if (dayWeekend == "seg") {
                res.end()
                con.query(updateHourSeg, [newHour, idPsi, oldHour], (err, result) => {
                    console.log("message error" + err)
                    console.log("message result" + result)
                })

            }


        } catch (err) {
            console.log(err)
        }

        try {

            if (dayWeekend == "ter") {

                con.query(updateHourTer, [newHour, idPsi, oldHour], (err, result) => {
                    console.log("message error" + err)
                    console.log("message result" + result)
                })

            }


        } catch (err) {
            console.log(err)
        }


        try {

            if (dayWeekend == "qua") {

                con.query(updateHourQua, [newHour, idPsi, oldHour], (err, result) => {
                    console.log("message error" + err)
                    console.log("message result" + result)
                })

            }

        } catch (err) {
            console.log(err)
        }


        try {

            if (dayWeekend == "qui") {

                con.query(updateHourQui, [newHour, idPsi, oldHour], (err, result) => {
                    console.log("message error" + err)
                    console.log("message result" + result)
                })

            }

        } catch (err) {
            console.log(err)
        }


        try {

            if (dayWeekend == "sex") {

                con.query(updateHourSex, [newHour, idPsi, oldHour], (err, result) => {
                    console.log("message error" + err)
                    console.log("message result" + result)
                })

            }

        } catch (err) {
            console.log(err)
        }

    }
}