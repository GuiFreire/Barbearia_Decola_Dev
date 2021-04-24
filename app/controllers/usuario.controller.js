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
};

const findFuncionarioByEmail= async (req, res) => {

    const email = req.params.email;

    const Usuario = await usuarioRepository.findFuncionarioByEmail(email);
    
    // valida se a busca gerou resultados
        if (!Usuario) { 
            res.status(400).send({ message: ' Email não encontrado'});
    
            return;
        };
        try {
            const usuarioRetorno = await usuarioRepository.findFuncionarioByEmail(email)
            res.send(usuarioRetorno)
        } catch(error) {
            res.status(500).send(error)
        };
};


const findFuncionarioByCpf= async (req, res) => {

    const cpf = req.params.cpf;

    const Usuario = await usuarioRepository.findFuncionarioByCpf(cpf);
    
    // valida se a busca gerou resultados
        if (!Usuario) { 
            res.status(400).send({ message: ' CPF não encontrado'});
    
            return;
        };
        try {
            const usuarioRetorno = await usuarioRepository.findFuncionarioByCpf(cpf)
            res.send(usuarioRetorno)
        } catch(error) {
            res.status(500).send(error)
        };
};


const findClienteByEmail = async (req, res) => {

    const email = req.params.email;

    const Usuario = await usuarioRepository.findClienteByEmail(email);
    
    // valida se a busca gerou resultados
        if (!Usuario) { 
            res.status(400).send({ message: ' usuario não encontrado'});
    
            return;
        };
        try {
            const usuarioRetorno = await usuarioRepository.findClienteByEmail(email)
            res.send(usuarioRetorno)
        } catch(error) {
            res.status(500).send(error)
        };
};


const findClienteByTelefone = async (req, res) => {

    const telefone = req.params.telefone;

    const Usuario = await usuarioRepository.findClienteByTelefone(telefone);
    
        // valida se a busca gerou resultados
        if (!Usuario) { 
            res.status(400).send({ message: 'Telefone não encontrado'});
    
            return;
        };
        try {
            const usuarioRetorno = await usuarioRepository.findClienteByTelefone(telefone)
            res.send(usuarioRetorno)
        } catch(error) {
            res.status(500).send(error)
        };
};


module.exports = {
    create,
    findClientes,
    findFuncionarios,
    findFuncionarioByEmail,
    findFuncionarioByCpf,
    findClienteByEmail,
    findClienteByTelefone
}