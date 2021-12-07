const mysql = require("mysql")

const con = mysql.createConnection({
    host: "us-cdbr-east-04.cleardb.com",
    database: "heroku_97c5ba0b61d20f1",
    user: "bf471cac6a1382",
    password: "0676fe22",
})

module.exports = { con }
