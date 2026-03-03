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
     criarCategoria: async (req, res) => {
        try {
    console.log (req.body)
            const { descricaoCategoria, dataCap } = req.body;

            if (descricaoCategoria == undefined || dataCap == undefined) {
                return res.status(400).json({ erro: 'campos OBRIGATÓRIOS não preenchidos' })
            }

            await categoriasModel.insert( descricaoCategoria, dataCap );

            res.status(201).json({ message: 'categoria cadastrada com sucesso!' });

        } catch (error) {
            console.error('erro ao cadastrar a categoria!', error)
            res.status(500).json({ error: 'erro no servidor ao cadastrar a categoria' });
        }
    },
    deletarCategoria: async (req, res) => {
        try {

            const { idCategoria } = req.params;

            await categoriasModel.deletarCategoria(idCategoria);

            res.status(200).json({ message: "Categoria deletado com sucesso!" })

        } catch (error) {
            console.error('Erro ao deletar categoria', error);
            res.status(500).json({ erro: "Erro no servidor ao deletar a categoria" });
        }
    },
   atualizarCategoria: async (req, res) => {
        try {
            const { id } = req.params;
            const { descricaoCategoria } = req.body;

            if (!descricaoCategoria) {
                return res.status(400).json({
                    message: "Descrição da categoria é obrigatória"
                });
            }
            const atualizado = await categoriasModel.atualizarCategoria(
                id,
                descricaoCategoria
            );
            if (atualizado === 0) {
                return res.status(404).json({
                    message: "Categoria não encontrada"
                });
            }
            return res.status(200).json({
                message: "Categoria atualizada com sucesso"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao atualizar categoria"
            });
        }
    },
    

}

export default categoriaController