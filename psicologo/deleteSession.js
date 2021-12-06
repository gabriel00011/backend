const { con } = require("../source/mysql")


module.exports = {
    deleteSession: (request, response, next) => {

        const { id_agenda } = request.body

        const deleteSession = "delete from tbl_agenda where age_in_codigo = ?"

        con.query(deleteSession, [id_agenda], (err, result) => {
            console.log(err)
            console.log(result)
        })

    }
}