// Importo los modelos
import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testiominales.js'

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
const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll(); // Capturo los testimoniales de la bd
        res.render('testimoniales',{
            pagina:'Testimoniales',
            testimoniales // envío los testimoniales a la vista en forma de arreglos, gracias a findAll
        })
    } catch (error) {
        console.log(error);
    }
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