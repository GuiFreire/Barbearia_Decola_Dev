const express = require ('express');
const cors = require('cors');
const db = require('./models');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

db.sequelize.sync();

require("./routes/agendamento.routes")(app);
require("./routes/servico.routes")(app);
require("./routes/usuario.routes")(app);
require("./routes/atendimento.routes")(app);
require("./routes/produtos.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server funcionando na porta ${PORT}`)
})