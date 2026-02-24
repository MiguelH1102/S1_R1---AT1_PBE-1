import pool from "../config/db.js";

    const produtoModel = {
        insert:async (pProduto) => {
            const sql = 'INSERT INTO produto (nomeProduto, valorProduto, vínculoImagem, dataCad) VALUES (?,?,?)';
            const values = [pProduto.nomeProduto, pProduto.valorProduto, pProduto.vinculoImagem, pProduto.dataCad];
            const [rows] = await pool.execute(sql, values);
            return rows;
        }, 
        selectAll: async () => {
            const sql = "SELECT * FROM produto;";
            const [rows] = await pool.execute(sql);
            return rows;
        }
    }

    export default produtoModel;