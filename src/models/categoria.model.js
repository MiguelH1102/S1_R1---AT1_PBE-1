import pool from "../config/db.js";


const categoriasModel = {
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
    
}
    export default categoriasModel