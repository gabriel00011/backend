const mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    database: "tcc",
    user: "root",
    password: "facil123"
})

module.exports = { con }
