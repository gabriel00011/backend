// const { con } = require("../source/mysql")

const { con } = require("../source/mysql")


module.exports = {
    signInHours: (req, res, next) => {

        const { idPsi, dataWeekend, hours } = req.body

        // insert de dados na respectivas tabelas
        const insertSeg = "insert into tbl_segunda(psi_in_codigo, hr_segunda) values (?,?)"
        const insertTer = "insert into tbl_terca(psi_in_codigo, hr_terca) values (?,?)"
        const insertQua = "insert into tbl_quarta(psi_in_codigo, hr_quarta) values (?,?)"
        const insertQui = "insert into tbl_quinta(psi_in_codigo, hr_quinta) values (?,?)"
        const insertSex = "insert into tbl_sexta(psi_in_codigo, hr_sexta) values (?,?)"


        // security insert max 5
        const securtitySeg = "select count(psi_in_codigo) from tbl_segunda where psi_in_codigo = ?"
        const securtityTer = "select count(psi_in_codigo) from tbl_terca where psi_in_codigo = ?"
        const securtityQua = "select count(psi_in_codigo) from tbl_quarta where psi_in_codigo = ?"
        const securtityQui = "select count(psi_in_codigo) from tbl_quinta where psi_in_codigo = ?"
        const securtitySex = "select count(psi_in_codigo) from tbl_sexta where psi_in_codigo = ?"


        console.log(idPsi, dataWeekend, hours)

        try {

            // inserte hora segunda
            con.query(securtitySeg, [idPsi], (err, result) => {

                let countIfy = JSON.stringify(result)
                let CountParse = JSON.parse(countIfy)
                let countInsertId = CountParse[0]["count(psi_in_codigo)"]

                if (dataWeekend == "seg" && countInsertId <= 4) {
                    con.query(insertSeg, [idPsi, hours], (err, result) => {
                        res.json(result)
                        // console.log("resultado de insert", result)
                    })

                }
            })

            // inserte hora terça
            con.query(securtityTer, [idPsi], (err, result) => {

                let countIfy = JSON.stringify(result)
                let CountParse = JSON.parse(countIfy)
                let countInsertId = CountParse[0]["count(psi_in_codigo)"]

                if (dataWeekend == "ter" && countInsertId <= 4) {
                    con.query(insertTer, [idPsi, hours], (err, result) => {
                        res.json(result)
                    })

                }
            })

            // // inserte hora quarta
            con.query(securtityQua, [idPsi], (err, result) => {

                let countIfy = JSON.stringify(result)
                let CountParse = JSON.parse(countIfy)
                let countInsertId = CountParse[0]["count(psi_in_codigo)"]

                if (dataWeekend == "qua" && countInsertId <= 4) {

                    con.query(insertQua, [idPsi, hours], (err, result) => {
                        res.json(result)

                    })

                }
            })

            // // inserte de horas quinta
            con.query(securtityQui, [idPsi], (err, result) => {

                let countIfy = JSON.stringify(result)
                let CountParse = JSON.parse(countIfy)
                let countInsertId = CountParse[0]["count(psi_in_codigo)"]

                if (dataWeekend == "qui" && countInsertId <= 4) {

                    con.query(insertQui, [idPsi, hours], (err, result) => {
                        res.json(result)
                    })

                }
            })

            // // inserte de horas sexta
            con.query(securtitySex, [idPsi], (err, result) => {

                let countIfy = JSON.stringify(result)
                let CountParse = JSON.parse(countIfy)
                let countInsertId = CountParse[0]["count(psi_in_codigo)"]

                if (dataWeekend == "sex" && countInsertId <= 4) {

                    con.query(insertSex, [idPsi, hours], (err, result) => {
                        res.json(result)
                    })

                }
            })

        } catch (e) {
            console.log(e.message)
            console.log(e.code)
        }


    }
}