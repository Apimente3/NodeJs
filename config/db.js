import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path: 'variables.env'})

// Nombre de la bd, user, password, 
const db = new Sequelize(process.env.DB_NOMBRE,process.env.DB_USER,process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool:{ // config de sequelize
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;