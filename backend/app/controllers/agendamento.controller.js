const agendamentoRepository = require("../repository/agendamento.repository");
const usuarioRepository = require("../repository/usuario.repository");
const servicoRepository = require("../repository/servico.repository");
const { differenceInCalendarDays, differenceInHours   } = require('date-fns');

const findAll = async (req, res) => {
    const agendamentos = await agendamentoRepository.findAll();

    res.send(agendamentos);
}

const create = async (req, res) => {
    const { data, id_cliente, id_funcionario, id_servico } = req.body;

    try {
        const diaAtual = new Date();
        const diferencaEntreDias = differenceInCalendarDays(new Date(data), diaAtual);

        if (diferencaEntreDias > 60) {
            res.status(400).send({ message: 'O limite para criação de agendamentos é de 2 meses.'});

            return;
        }

        if (diferencaEntreDias < 0) {
            res.status(400).send({ message: 'Não é possível realizar agendamentos para horários passados.'});

            return;
        }

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
    
};

const deleteAgendamento = async (req, res) => {
    const id = req.params.id
    

    //Validar se o agendamento existe
    const agendamento = await agendamentoRepository.findById(id);

    //Se o agendamento não existir, erro
    if (!agendamento) {
        res.status(400).send({
            message: "Agendamento não existe"
        });
    };

    const diaAtual = new Date();
    
    const diferencaEntreHoras = differenceInHours(new Date(agendamento.data), diaAtual);

    if (diferencaEntreHoras < 4) {
        res.status(400).send({ message: 'Não é possível cancelar o agendamento'});

        return;
    }

    try {
        const data = await agendamentoRepository.deleteAgendamento(id)

        if (data == 1) {
            res.send({
                message: "Agendamento deletado com sucesso"
            });
        } else {
            res.send({
                message: "Erro ao deletar agendamento"
            })
        }
    } catch(error) {
        res.send(error)
    };
};

const findAgendamentoByData = async (req, res) => {
    const data = req.params.data;

    try {
        //valida se agendamento existe
        const agendamento = await agendamentoRepository.findAgendamentoByData(data);
    
        if (!agendamento.length) {
            res.status(400).send({
                message: "Não existe agendamento nessa data"
            });

            return;
        };

        res.send(agendamento);
    } catch(error) {
        res.status(500).send(error);
    };
};

const findByFuncionarioName = async (req, res) => {
    const nome = req.params.nome;

    try {
        //valida se o agendamento existe
        const agendamento = await agendamentoRepository.findByFuncionarioName(nome);

        if (!agendamento.length) {
            res.status(400).send({
                message: "O agendamento não existe"
            });

            return;
        };

        res.send(agendamento);
    } catch(error) {
        res.status(500).send(error);
    };
};

const findByServico = async (req, res) => {
    const nome = req.params.nome;

    try {
        //valida se o agendamento existe
        const agendamento = await agendamentoRepository.findByServico(nome);
   
        if (!agendamento.length) {
            res.status(400).send({
                message: "O agendamento não existe"
            });

            return;
        };

        res.send(agendamento);
    } catch(error) {
        res.status(500).send(error);
    };
};


const updateById = async (req, res) => {
    const id = req.params.id;
    
    const agendamento = await agendamentoRepository.findById(id);

    if (!agendamento) {
        res.status(400).send({
            message: "Agendamento não existe"
        });

        return;
    }

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
        res.status(500).send(error);
    } 
};

const findByName = async (req, res) => {
    const nome = req.params.nome;

    try {
        const agendamento = await agendamentoRepository.findByName(nome);

        if (agendamento.length == 0) {
            res.status(400).send({
                message: "Agendamento inexistente"
            });

            return;
        };

        res.send(agendamento);
            
    } catch(error) {
        res.status(500).send(error);
    };
};



module.exports = {
    create,
    findAll,
    updateById,
    findByName,
    deleteAgendamento,
    findAgendamentoByData,
    findByFuncionarioName,
    findByServico 
}
