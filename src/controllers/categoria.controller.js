import categoriasModel from "../models/categoria.model.js";

const categoriaController = {
    listarCategorias: async (req, res) => {
        try {

            const categorias = await categoriasModel.listarCategorias();

            return res.status(200).json(categorias);

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao listar categorias"
            });
        }
    },
    

}

export default categoriaController