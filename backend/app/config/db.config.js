module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Gn@291218",
    DB: 'db_pi',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};