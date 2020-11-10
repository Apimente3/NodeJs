import express from 'express';
import { paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from '../controllers/paginasControllers.js'

const router = express.Router();

// req lo que enviamos, res lo que express no responde
/* router.get('/', (req,res)=>{
    res.render('Inicio',{
        pagina:'Inicio',
    });  
}) */

// Acomodo la lógica en los controladores 
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);  // view/nosotros.pug

router.get('/testimoniales', paginaTestimoniales); // view/testimoniales.pug

router.get('/viajes', paginaViajes);


export default router;  