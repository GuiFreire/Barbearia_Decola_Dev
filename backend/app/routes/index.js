const { Router } = require('express');

const { agendamentoRouter } = require('./agendamento.routes');
const { atendimentoRouter } = require('./atendimento.routes');
const { produtosRouter } = require('./produtos.routes');
const { servicoRouter } = require('./servico.routes');
const { usuarioRouter } = require('./usuario.routes');

const authMiddleware = require('../middlewares/auth');

const routes = Router();

//routes.use(authMiddleware);

routes.use('/api/agendamento', agendamentoRouter);
routes.use('/api/atendimento', atendimentoRouter);
routes.use("/api/produto", produtosRouter);
routes.use("/api/servico", servicoRouter);
routes.use("/api/usuario", usuarioRouter);

module.exports = {
    routes
}