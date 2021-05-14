
const usuario = require("../controllers/usuario.controller");

const { Router } = require("express");

const usuarioRouter = Router();

// atualizar usuario
usuarioRouter.put("/:id",usuario.update);

//Listar todos os usuários
usuarioRouter.get('/', usuario.findAll);

//Buscar usuário por ID
usuarioRouter.get("/:id", usuario.findUsuarioById);

//Listar Clientes
usuarioRouter.get("/clientes", usuario.findClientes);

//buscar cliente por nome
usuarioRouter.get("/cliente-nome/:nome",usuario.findClienteByNomeAndTipo);

// buscar cliente por cpf
usuarioRouter.get("/cliente-cpf/:cpf",usuario.findClienteByCpf);

//Listar Funcionarios
usuarioRouter.get("/funcionarios", usuario.findFuncionarios);

    //buscar funcionario por nome
usuarioRouter.get("/funcionario-nome/:nome",usuario.findFuncionarioByNomeAndTipo);

//Buscar Funcionario por Email
usuarioRouter.get("/funcionario-email/:email", usuario.findFuncionarioByEmail);

//Buscar Funcionario por CPF
usuarioRouter.get("/funcionario-cpf/:cpf", usuario.findFuncionarioByCpf);

//Buscar Cliente por Email
usuarioRouter.get("/cliente-email/:email", usuario.findClienteByEmail);/// concluido

    //Listar Funcionarios por telefone
usuarioRouter.get("/funcionariostelefone/:telefone", usuario.findFuncByPhone);

//Deletar usuario por id
usuarioRouter.delete("/:id", usuario.deleteUsuario);

//Buscar Cliente por telefone
usuarioRouter.get("/cliente-telefone/:telefone", usuario.findClienteByTelefone);

module.exports = {
    usuarioRouter
}