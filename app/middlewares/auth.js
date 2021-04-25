const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../config/auth');

module.exports = async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({ error: 'Token não fornecido' });
    }

    const [, token] = authHeader.split(' ');

    try {
        await promisify(jwt.verify)(token, authConfig.secret);

        return next();
    } catch (err) {
        return response.status(401).json({ error: 'Token inválido' });
    }
};
