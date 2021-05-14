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
            url: url ? url : "https://i.imgur.com/SduiA8z.png"
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

const findAll = async (req, res) => {
    try {
        const usuarios = await usuarioRepository.findAll();

        res.send(usuarios);
    }catch (error){
        res.status(500).send(error);
    };
};

const findUsuarioById = async (req, res) => {
    const id = req.params.id;
    try {
        const usuario = await usuarioRepository.findUsuarioById(id)

        if(!usuario) {
            res.status(400).send({
                mensage: "Cliente nao encontrado"
            });

            return;
        }

        res.send(usuario)
    }catch (error){
        res.status(500).send(error);
    }
}

const findClienteByNomeAndTipo = async(req,res) =>{
    const nome =  req.params.nome;
    
        try {
            const usuario = await usuarioRepository.findClienteByNomeAndTipo(nome);
   
            if(!usuario.length){
                res.status(400).send({
                    mensage: "Cliente nao encontrado"
                });

                return;
            };

            res.send(usuario);
        }catch (error){
            res.status(500).send(error);
        }
};

const findClienteByCpf= async (req,res)=>{
    const cpf = req.params.cpf;
    
        try{
            const usuario = await usuarioRepository.findClienteByCpf(cpf);

            if(!usuario){
                res.status(400).send({
                    message: 'Cliente não encontrado'
                });

                return;
            };
            res.send(usuario)
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
};

const findFuncionarioByEmail= async (req, res) => {

    const email = req.params.email;
    
        try {
            const usuario = await usuarioRepository.findFuncionarioByEmail(email);

            // valida se a busca gerou resultados
            if (!usuario) { 
                res.status(400).send({ message: 'Funcionário não encontrado'});
    
                return;
            };

            res.send(usuario);
        } catch(error) {
            res.status(500).send(error);
        };
};

const findFuncionarioByCpf= async (req, res) => {

    const cpf = req.params.cpf;

    const usuario = await usuarioRepository.findFuncionarioByCpf(cpf);
    
        try {
            // valida se a busca gerou resultados
            if (!usuario) { 
                res.status(400).send({ message: 'Funcionário não encontrado'});
    
                return;
            };

            res.send(usuario);
        } catch(error) {
            res.status(500).send(error);
        };
};

const findClienteByEmail = async (req, res) => {
    const email = req.params.email;

        try {
            const usuario = await usuarioRepository.findClienteByEmail(email);
    
            // valida se a busca gerou resultados
            if (!usuario) { 
                res.status(400).send({ message: 'Cliente não encontrado'});
    
                return;
            };

            res.send(usuario);
        } catch(error) {
            res.status(500).send(error);
        };
};

const findClienteByTelefone = async (req, res) => {
    const telefone = req.params.telefone;

        try {
            const usuario = await usuarioRepository.findClienteByTelefone(telefone);
    
            // valida se a busca gerou resultados
            if (!usuario) { 
                res.status(400).send({ message: 'Cliente não encontrado'});
    
                return;
            };

            res.send(usuario);
        } catch(error) {
            res.status(500).send(error);
        };
};

const findFuncionarioByNomeAndTipo = async ( req, res) =>{
    const nome = req.params.nome;

        try {
            const usuario = await usuarioRepository.findFuncionarioByNomeAndTipo(nome);
    

            if(!usuario.length){
                res.status(400).send({
                    mensage: "Funcionario nao encontrado"
                });

                return;
            };

            res.send(usuario);
        }catch (error){
            res.status(500).send(error);
        }
};

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

    let agendamentos;

    if (usuario.tipo === 1) {
        agendamentos = await agendamentoRepository.findByAgendamentoByClienteId(id, usuario.tipo);
    } else {
        agendamentos = await agendamentoRepository.findByAgendamentoByFuncionarioId(id, usuario.tipo);
    }

    if (agendamentos.length) {
        res.status(400).send({
            message: "O usuário em questão está presente em um agendamento e não pode ser deletado."
        });

        return;
    }

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
    findAll,
    findClientes,
    findUsuarioById,
    findFuncionarios,
    findFuncByPhone,
    deleteUsuario,
    findFuncionarioByEmail,
    findFuncionarioByCpf,
    findClienteByEmail,
    findClienteByTelefone,
    findClienteByNomeAndTipo,
    findFuncionarioByNomeAndTipo,
    findClienteByCpf,
    update,
    create
}