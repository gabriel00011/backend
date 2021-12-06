const { con } = require("../source/mysql")

module.exports = {

    getHours: (req, res, next) => {

        const innerJoinHours = "select * from tbl_segunda where psi_in_codigo = ?"

        con.query(innerJoinHours, [req.params.id], (err, result) => {
            res.json(result)
            // console.log("err " + err)
            // console.log("resultado de resposta ", result)
        })

    }

}