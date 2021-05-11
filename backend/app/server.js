const express = require ('express');
const cors = require('cors');
const db = require('./models');
const { routes } = require('./routes');
const { loginRouter, createUserRouter } = require('./routes/login.routes');

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(cors(corsOptions));

app.use('/api/sessao', loginRouter);

app.use('/api/usuario', createUserRouter);

app.use(routes);

db.sequelize.sync();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server funcionando na porta ${PORT}`)
})