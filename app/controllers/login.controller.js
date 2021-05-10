const usuarioRepository = require("../repository/usuario.repository");
const authConfig = require('../config/auth');
const { sign } = require('jsonwebtoken');

const createSession = async (req, res) => {
    const { email, senha, tipo } = req.body;

    const usuario = await usuarioRepository.findUsuarioByEmail(email);

    if (!usuario) {
        res.status(404).json({ message: 'Usuário não encontrado.'});

        return;
    }

    if (usuario.senha !== senha) {
        res.status(400).json({ message: 'E-mail/Senha incorreto' });

        return;
    }
    
    const token = sign({}, authConfig.secret, {
        subject: usuario.id.toString(),
        expiresIn: authConfig.expiresIn,
    });
  
    res.send(token);
}

module.exports = {
    createSession
}