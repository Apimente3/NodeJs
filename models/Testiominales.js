import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales',{ // Creamos el modelo testimonial a partir de la tabla testimoniales y definimos los tipos de datos con sequalize
    nombre: {
        type: Sequelize.STRING,
    },
    correo: {
        type: Sequelize.STRING,
    },
    mensaje: {
        type: Sequelize.STRING,
    }
});