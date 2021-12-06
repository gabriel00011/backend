const { con } = require("../source/mysql")


module.exports = {
    psicologo: (req, res, next) => {

        const {
            email, pass, passconfirm,
            nome, sobrenome, cpf, crp,
            rg, telefone, celular,
            genero, sexo, cep,
            rua, numero, complemento,
            bairro, cidade, estado } = req.body


        // console.log(email, pass, passconfirm,
        //     nome, sobrenome, cpf,
        //     rg, telefone, celular,
        //     genero, sexo, cep,
        //     rua, numero, complemento,
        //     bairro, cidade, estado)


        const insertDadosPsicologoPessoais = "insert into tbl_psicologo(psi_st_nome, psi_st_sobrenome, psi_st_cpf, psi_st_crp, psi_st_email, psi_st_telefone, psi_st_celular, psi_st_senha, psi_en_orientacao_sex) values(?,?,?,?,?,?,?,?,?)"
        const insertDadosPsicologoEndereco = "insert into tbl_end_psicologo(psi_in_codigo, end_st_cidade, end_st_bairro, end_st_rua, end_st_numero, end_st_complemento, end_st_cep, end_st_uf) values(?,?,?,?,?,?,?,?)"
        const id_psicologo = "select max(psi_in_codigo) from tbl_psicologo"

        con.query(insertDadosPsicologoPessoais, [nome, sobrenome, cpf, crp, email, telefone, celular, pass, genero], (err, result) => {
     
            if (!!result) {
                con.query(id_psicologo, (err, result, field) => {

                    let last_id = JSON.stringify(result)
                    let last_id_parse = JSON.parse(last_id)
                    let final_last_id = last_id_parse[0]["max(psi_in_codigo)"]


                    con.query(insertDadosPsicologoEndereco, [final_last_id, cidade, bairro, rua, numero, complemento, cep, estado], (err, result) => {
                        if (result)
                            throw err
                    })
                })
            }

        })
        // final da query

    }
}



// console.log(email, pass, passconfirm,
//     nome, sobrenome, cpf,
//     rg, telefone, celular,
//     genero, sexo, cep,
//     rua, numero, complemento,
//     bairro, cidade, estado)