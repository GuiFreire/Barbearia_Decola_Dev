const agendamentoRepository = require("../repository/agendamento.repository");
const usuarioRepository = require("../repository/usuario.repository");
const servicoRepository = require("../repository/servico.repository");

const findAll = async (req, res) => {
    const agendamentos = await agendamentoRepository.findAll();

    res.send(agendamentos);
}

const create = async (req, res) => {
    const { data, id_cliente, id_funcionario, id_servico } = req.body;

    try {
        // validar se o cliente existe
        const cliente = await usuarioRepository.findUserByIdAndType(id_cliente, 1);

        // valida se o objeto não tem nada dentro, ou seja, está vazio (null)
        if (!cliente) {
            res.status(400).send({ message: 'Cliente não encontrado'});

            return;
        }

        // validar se o funcionario existe
        const funcionario = await usuarioRepository.findUserByIdAndType(id_funcionario, 2);

        // valida se o objeto não tem nada dentro, ou seja, está vazio (null)
        if (!funcionario) {
            res.status(400).send({ message: 'Funcionário não encontrado'});

            return;
        }

        //Valida se o horário ja foi agendado para o funcionário
        const horario = await agendamentoRepository.findAgendamentoByDataAndFuncionario(data, id_funcionario);

        //Valida se o objeto não está vazio
        if (horario) {
            res.status(400).send({ message: "Horario já agendado para este funcionário"})
        };


        // busca o serviço por id
        const servico = await servicoRepository.findServicoById(id_servico);

        // valida se a busca gerou resultados
        if (!servico) { 
            res.status(400).send({ message: 'Serviço não encontrado'});

            return;
        }

        const agendamentoCriado = await agendamentoRepository.create({
            id_cliente,
            id_funcionario,
            id_servico,
            data
        });
        
        res.status(201).send(agendamentoCriado);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);

        return;
    }
    
}

const updateById = async (req, res) => {
    const id = req.params.id;

    try {
        const agendamentoAtualizado = await agendamentoRepository.updateById(req.body, id);

        if (agendamentoAtualizado == 1) {
            res.send({
                message: "Agendamento atualizado com sucesso"
            })
        } else {
            res.send({
                message: "Não foi possível atualizar o agendamento"
            });
        };
    } catch(error) {
        res.status(500).send(error)
    } 
};

const findByName = async (req, res) => {
    const nome = req.params.nome;

    const agendamento = await agendamentoRepository.findByName(nome);

    try {

        if (agendamento.length == 0) {
            res.status(400).send({
                message: "Agendamento inexistente"
            });

            return;
        };

   
        const agendamentoRetorno = await agendamentoRepository.findByName(nome)
        res.send(agendamentoRetorno)
            
    } catch(error) {
        res.status(500).send(error)
    };
}



module.exports = {
    create,
    findAll,
    updateById,
    findByName

}
