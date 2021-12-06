const { con } = require("../source/mysql")

module.exports = {
    searchPsicologo: (req, res, next) => {

        const { idoso, casais, lgbtq, pcd, infantil, ansiedade, toc, burnout, tag, casamento, alcoolismo } = req.body

        console.log(idoso, casais, ansiedade)

        const public = [idoso, casais, lgbtq, pcd, infantil]

        const selectPsi = `SELECT psi_st_nome, psi_st_crp, atu_se_especialidade, atu_se_publico, end_st_cidade, psi_st_email, end_st_rua, end_st_numero, end_st_cep, end_st_uf 
        FROM tbl_atuacao A
        INNER JOIN tbl_psicologo P
        ON A.psi_in_codigo = P.psi_in_codigo
        INNER JOIN tbl_end_psicologo E
        ON P.psi_in_codigo = E.psi_in_codigo
        where A.atu_se_especialidade = ? 
        or atu_se_especialidade = ?
        or atu_se_especialidade = ?
        or atu_se_especialidade = ?
        or atu_se_especialidade = ?
        or atu_se_especialidade = ?
        or atu_se_publico = ? 
        or atu_se_publico = ?
        or atu_se_publico = ?
        or atu_se_publico = ?
        or atu_se_publico = ?`

        try {

                con.query(selectPsi, [ansiedade, toc, burnout, tag, casamento, alcoolismo, idoso, casais, lgbtq, pcd, infantil], (err, result) => {
                    console.log(err)
                    console.log(result)
                    res.json(result)
                })

        } catch (e) {
            console.log(e)
        }
        // 


    },

}

