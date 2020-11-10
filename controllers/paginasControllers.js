// Importo el modelo viajes
import { Viaje } from '../models/Viaje.js'

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio',
    })
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros',
    })
};

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales',
    })
};

const paginaViajes = async (req, res) => {
    // Consulto BD
    const viajes = await Viaje.findAll();
    // console.log(viajes); // viene a ser un array donde se encuentran todos los viajes consultados en la bd


    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes, // envío los viajes de la consulta a la vista
    })
};

export {
    paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes
}