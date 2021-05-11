const login = require("../controllers/login.controller");
const usuario = require("../controllers/usuario.controller");

const { Router } = require("express");

const loginRouter = Router();

const createUserRouter = Router();

// Criar usuário
createUserRouter.post("/", usuario.create);

// Criar token de autenticação
loginRouter.post("/", login.createSession);

module.exports = {
    loginRouter,
    createUserRouter
}