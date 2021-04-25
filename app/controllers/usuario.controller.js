const usuarioRepository = require("../repository/usuario.repository");
const agendamentoRepository = require("../repository/agendamento.repository");

const create = async (req, res) => {
    const { nome, cpf, email, telefone, senha, tipo, url } = req.body;

    if (!nome || !cpf || !email || !telefone || !senha || !tipo) {
        res.status(400).send({
            message: "Missing required value"
        });

        return;
    };

    //Valida se o usuário já existe
    const usuario = await usuarioRepository.findUserByEmailOrCpfOrPhone(email, cpf, telefone);

    //Se o usuário for encontrado, não deixa criar
    if (usuario) {
        res.status(400).send({
            message: "Usuário já cadastrado"
        })
        return;
    }

    try {
        const usuarioCriado = await usuarioRepository.create({
            nome,
            cpf,
            email,
            telefone,
            senha,
            tipo,
            url
        });

        res.status(201).send(usuarioCriado);
    } catch(error) {
        res.status(500).send(error);
    }
};

const findClientes = async (req, res) => {
    const usuarios = await usuarioRepository.findClientes();

    res.send(usuarios)
};

const findFuncionarios = async (req, res) => {
    const usuarios = await usuarioRepository.findFuncionarios();

    res.send(usuarios)
}

const findFuncByPhone = async (req, res) => {
    const telefone = req.params.telefone;

    try {
        const usuario = await usuarioRepository.findFuncByPhone(telefone);

        if (!usuario) {
            res.status(400).send({
                message: "Telefone de funcionario inexistente"
            });

            return;
        };

        res.send(usuario);
    } catch(error) {
        res.status(500).send(error);
    };
}


const deleteUsuario = async (req, res) => {
    const id = req.params.id;

    //valida se usuário existe
    const usuario = await usuarioRepository.findUsuarioById(id);

    //Se não existir, não deixa deletar
    if (!usuario) {
        res.status(400).send({
            message: "O usuario em questão não existe"
        });

        return;
    };

    try {
        const usuarioDeletado = await usuarioRepository.deleteUsuario(id)
        if (usuarioDeletado == 1) {
            res.send({
                message: "Usuario deletado com sucesso"
            });
        } else {
            res.send({
                message: "Não foi possível deletar o usuário"
            });
        };
    } catch(error) {
        res.status(500).send(error)
    };
};



module.exports = {
    create,
    findClientes,
    findFuncionarios,
    findFuncByPhone,
    deleteUsuario
}