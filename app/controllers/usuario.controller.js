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

const update = async (req, res) => {
    //Pegando o ID da rota
    const id = req.params.id;

    //Verifica se usuario existe
    const usuario = await usuarioRepository.findUsuarioById(id);

    //Se o usuario não existir, não atualiza
    if (!usuario) {
        res.status(400).send({
            message: "usuario não existe"
        })

        return;
    };

    try {
        
        const usuarioAtualizado = await usuarioRepository.updateUser(req.body, id);

        
        if (usuarioAtualizado == 1) {
            res.send({
                message: "usuario atualizado com sucesso"
            });
        } else {
            res.send({
                message: "Falha ao atualizar usuario"
            })
        };
    } catch(error){
        res.status(500).send(error)
    };
};

const findClienteByNomeAndTipo = async(req,res) =>{
    const nome =  req.params.nome;
    const usuario = await usuarioRepository.findClienteByNomeAndTipo(nome);
   

        if(!usuario){
            res.status(400).send({mensage: "cliente nao encontrado"})

            return
        }

        try {
            const usuarioRetorno =await usuarioRepository.findClienteByNameAndTipo(nome)
            res.send(usuarioRetorno)
        }catch (error){
            res.status(500).send(error)
        }
}

const findClienteByCpf= async (req,res)=>{
    const cpf = req.params.cpf;
    const usuario = await usuarioRepository.findClienteByCpf(cpf);

        if(!usuario){
            res.status(400).send({message: 'CPF não localizado'});

            return
        };

        try{
            const usuarioRetorno= await usuarioRepository.findClienteByCpf(cpf)
            res.send(usuarioRetorno)
        }catch(error){
            res.status(500).send(error)
        }
}

const findClientes = async (req, res) => {
    const usuarios = await usuarioRepository.findClientes();

    res.send(usuarios)
};

const findFuncionarios = async (req, res) => {
    const usuarios = await usuarioRepository.findFuncionarios();

    res.send(usuarios)
}

const findFuncionarioByNomeAndTipo =  async ( req, res) =>{
    const nome = req.params.nome;
    const usuario = await usuarioRepository.findFuncionarioByNomeAndTipo(nome);
    

        if(!usuario){
            res.status(400).send({mensage: "funcionario nao encontrado"})

            return
        }

        try {
            const usuarioRetorno =await usuarioRepository.findFuncionarioByNomeAndTipo(nome)
            res.send(usuarioRetorno)
        }catch (error){
            res.status(500).send(error)
        }
}

module.exports = {
    create,
    findClientes,
    findFuncionarios,
    findClienteByNomeAndTipo,
    findFuncionarioByNomeAndTipo,
    findClienteByCpf,
    update
    
    

    
}