import Sequelize from 'sequelize';
import db from './config/db.js';

export const Viaje = db.define('viajes',{ // Creamos el modelo viaje a partir de la tabla viajes y definimos los tipos de datos con sequalize
    titulo: {
        type: Sequelize.STRING,
    },
    precio: {
        type: Sequelize.STRING,
    },
    fecha_ida: {
        type: Sequelize.DATE,
    },
    fecha_vuelta: {
        type: Sequelize.DATE,
    },
    imagen: {
        type: Sequelize.STRING,
    },
    descripcion: {
        type: Sequelize.STRING,
    },
    disponibles:{
        type: Sequelize.STRING,
    },
    slug: {
        type: Sequelize.STRING
    }
})