module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Avanade1401!",
    DB: "db_projeto_pi",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};