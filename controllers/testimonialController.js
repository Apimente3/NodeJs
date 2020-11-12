// Importamos el modelo
import { Testimonial } from '../models/Testiominales.js';

const guardarTestimonial = async (req,res) =>{
    /* console.log(req.body); */

    // Validar
    const errores = [];
    const {nombre,correo,mensaje} = req.body;
    if(nombre.trim() === ''){
        errores.push({mensaje: 'El campo nombre está vacío'});
    }
    if(correo.trim() === ''){
        errores.push({mensaje: 'El campo correo está vacío'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El campo mensaje está vacío'});
    }

    if(errores.length > 0){
        // Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            //le paso el nombre, mensaje y correo como objetos para que si sucede un error no tenga que volver a reescribir todo
            nombre,
            mensaje, // en el text area coloco =mensaje para que tome este valor en el value
            correo,
            testimoniales, // le envío los testimoniales existentes
        })
    }
    else{
        // Almacenar en la bd
        try {
            await Testimonial.create({
                nombre, 
                mensaje, 
                correo
            });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
}
export {
    guardarTestimonial,
}