import produtoModel from "../models/produto.model.js";

const produtoController =  {
    listar:async (req, res) => {
        try {
            const listagem = await produtoModel.selectAll()
            if(!listagem || listagem.length === 0) {
                return res.status(400).json({message: "A tabela não tem registro"})
            }
            res.status(200).json({message:"Dados listados", data: listagem})
            
            
            
        } catch (error) {
            console.error(error.message);
            res.status(500).json({message:'Ocorreu um erro no servidor', errorMenssage:error.message})
        }
    },
     criarProduto:async (req, res) => {
        try {
            const {idCategoria, nomeProduto, valorProduto, vínculoImagem, dataCad} = req.body;
            // Realizar tratamento dos dados recebidos

             if (!nomeProduto || !valorProduto || !idCategoria || !dataCad) {
                return res.status(400).json({ message: "Dados incompletos ou inválidos" });
            }


            res.status(201).json({message:'Registro inserido com sucesso'})

        } catch (error) {
            console.error(error);
        res.status(500).json({message:'Ocorreu um erro no servidor', errorMenssage:error.message});
        }
    }
 }

 export default produtoController;