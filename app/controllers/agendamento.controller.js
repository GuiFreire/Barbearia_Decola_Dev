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

const findAgendamentoByData = async (req, res) => {
    const data = req.params.data;

    //valida se agendamento existe
    const agendamento = await agendamentoRepository.findAgendamentoByData(data);

    
    if (!agendamento) {
        res.status(400).send({
            message: "Agendamento não existe"
        });

        return;
    };

    try {
        const agendamentoRetorno = await agendamentoRepository.findAgendamentoByData(data)
        res.send(agendamentoRetorno)
    } catch(error) {
        res.status(500).send(error)
    };
};

const findByFuncionarioName = async (req, res) => {
    const nome = req.params.nome;

    //valida se o agendamento existe
    const agendamento = await agendamentoRepository.findByFuncionarioName(nome);

   
    if (agendamento.length==0) {
        res.status(400).send({
            message: "O agendamento não existe"
        });

        return;
    };

    try {
        const agendamentoRetorno = await agendamentoRepository.findByFuncionarioName(nome)
        res.send(agendamentoRetorno)
    } catch(error) {
        res.status(500).send(error)
    };
};

const findByServico = async (req, res) => {
    const nome = req.params.nome;

    //valida se o agendamento existe
    const agendamento = await agendamentoRepository.findByServico(nome);

   
    if (agendamento.length==0) {
        res.status(400).send({
            message: "O agendamento não existe"
        });

        return;
    };

    try {
        const agendamentoRetorno = await agendamentoRepository.findByServico(nome)
        res.send(agendamentoRetorno)
    } catch(error) {
        res.status(500).send(error)
    };
};


module.exports = {
    create,
    findAll,
    findAgendamentoByData,
    findByFuncionarioName,
    findByServico
    
}
