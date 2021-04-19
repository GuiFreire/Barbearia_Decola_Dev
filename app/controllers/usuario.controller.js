const usuarioRepository = require("../repository/usuario.repository");

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

module.exports = {
    create,
    findClientes,
    findFuncionarios
}