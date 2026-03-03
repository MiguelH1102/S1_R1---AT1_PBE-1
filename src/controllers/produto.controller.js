import produtoModel from "../models/produto.model.js";

const produtoController =  {
   listarProdutos: async (req, res) => {
        try {
            const { idProduto } = req.query;
          
            if(idProduto){
const produto = await produtoModel.buscarUm(idProduto);

                return res.status(200).json(produto);
            }else {
                const produtos = await produtoModel.buscarTodos();
                return res.status(200).json(produtos);
            }

        } catch (error) {
            console.error('erro ao listar produtos:', error);
            res.status(500).json({ message: 'Error ao buscar produto' })
        }
    },
    criarProduto: async (req, res) => {
        try {
    console.log (req.body)
            const { idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad } = req.body;

            if (idCategoria == undefined || nomeProduto == undefined || valorProduto == undefined || isNaN(valorProduto) || vinculoImagem == undefined || dataCad == undefined) {
                return res.status(400).json({ erro: 'campos OBRIGATÓRIOS não preenchidos' })
            }

            await produtoModel.insert( idCategoria, nomeProduto, valorProduto, vinculoImagem, dataCad);

            res.status(201).json({ message: 'produto cadastrado com sucesso!' });

        } catch (error) {
            console.error('erro ao cadastrar o produto!', error)
            res.status(500).json({ error: 'erro no servidor ao cadastrar o produto' });
        }
    },

    deletarProduto: async (req, res) => {
        try {

            const { idProduto } = req.params;

            await produtoModel.deletarProduto(idProduto);

            res.status(200).json({ message: "Produto deletado com sucesso!" })

        } catch (error) {
            console.error('Erro ao deletar produto', error);
            res.status(500).json({ erro: "Erro no servidor ao deletar o produto" });
        }
    },
    atualizarProduto: async (req, res) => {
           try {
         const idProduto = req.params.id;

        const {idCategoria,nomeProduto,valorProduto,vinculoImagem,dataCad
        } = req.body;

         if (idProduto === undefined || idCategoria === undefined || nomeProduto === undefined || valorProduto === undefined || vinculoImagem === undefined ||dataCad === undefined
        ) {
            return res.status(400).json({
                mensagem: "Todos os campos são obrigatórios."
            });
        }

        const resultado = await produtoModel.atualizarProduto(
            id,
            idCategoria,
            nomeProduto,
            valorProduto,
            vinculoImagem,
            dataCad
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ 
                mensagem: "Produto não encontrado." 
            });
        }

        return res.status(200).json({ 
            mensagem: "Produto atualizado com sucesso!" 
        });

    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        return res.status(500).json({ 
            mensagem: "Erro interno do servidor." 
        });
    }
    }
    
 }

 export default produtoController;