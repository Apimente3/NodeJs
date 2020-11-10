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

const paginaViajes = (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes',
    })
};

export {
    paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes
}