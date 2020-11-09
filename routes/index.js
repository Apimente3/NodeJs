import express from 'express';

const router = express.Router();

// req lo que enviamos, res lo que express no responde
router.get('/', (req,res)=>{
    res.render('Inicio',{
        pagina:'Inicio',
    });
})

router.get('/nosotros', (req,res)=>{
    res.render('nosotros',{
        pagina:'Nosotros',
    });  // view/nosotros.pug
})

router.get('/testimoniales', (req,res)=>{
    res.render('testimoniales',{
        pagina:'Testimoniales',
    });  
})

router.get('/viajes', (req,res)=>{
    res.render('viajes',{
        pagina:'Viajes',
    });  
})


export default router;  