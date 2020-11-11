// Importo el modelo viajes
import { Viaje } from '../models/Viaje.js'

/* CONTROLADOR INICIO  */
const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio',
    })
};

/* CONTROLADOR NOSOTROS */
const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros',
    })
};

/* CONTROLADOR TESTIMONIALES */
const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales',
    })
};

/* CONTROLADOR VIAJES */
const paginaViajes = async (req, res) => {
    // Consulto BD
    const viajes = await Viaje.findAll();
    // console.log(viajes); // viene a ser un array donde se encuentran todos los viajes consultados en la bd
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes, // envío los viajes de la consulta a la vista
    })
};

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req,res) =>{
    /* console.log(req.params); */
    const { slug } = req.params; //tomo el viaje que viene por parametro de la url viajes/:slug -> slug viene a ser el viaje

    try {
        const viaje = await Viaje.findOne({ where : { slug } });
        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje
        })    
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje
}