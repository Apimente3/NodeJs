import express from 'express';
// Importamos controladores
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViaje 
} from '../controllers/paginasControllers.js';

import {
    guardarTestimonial
} from '../controllers/testimonialController.js';


const router = express.Router();

// req lo que enviamos, res lo que express no responde
/* router.get('/', (req,res)=>{
    res.render('Inicio',{
        pagina:'Inicio',
    });  
}) */

/* INICIO */
router.get('/', paginaInicio);

/* NOSOTROS */
router.get('/nosotros', paginaNosotros);  // view/nosotros.pug

/* TESTIMONIALES */
router.get('/testimoniales', paginaTestimoniales); // view/testimoniales.pug
router.post('/testimoniales', guardarTestimonial);

/* VIAJES */
router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);


export default router;  