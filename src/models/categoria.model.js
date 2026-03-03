import pool from "../config/db.js";


const categoriasModel = {
    insert:async (descricaoCategoria, dataCap) => {
        const sql = 'INSERT INTO categoria ( descricaoCategoria ,dataCap) VALUES (?,?)';
        const values = [descricaoCategoria, dataCap]
        const [rows] = await pool.execute (sql, values);
        return rows
    }, 

    listarCategorias : async () => {
        try {
            const [rows] = await pool.execute(
                "SELECT * FROM categoria"
            );
            return rows;
        } catch (error) {
            throw error;
        }
    },
    deletarCategoria: async (idCategoria) => {
        try {
            const sql = 'DELETE FROM categoria WHERE idCategoria = ?';
        const values = [idCategoria]
        const [rows] = await pool.execute (sql, values);
        return rows

        } catch (error) {
            console.error('erro ao deletar a categoria:', error);
            throw error;
        }
    },

    
    
    
}
    export default categoriasModel