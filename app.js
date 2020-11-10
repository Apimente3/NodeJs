/* const express = require('express'); */
import express from 'express';
import router from './routes/index.js'
import db from './config/db.js';

const app = express();

// Conectar bd}
db.authenticate()
    .then(() => console.log('bd conectada'))
    .catch( error => console.log(error));


const port = process.env.PORT || 3000;

// Habilitar pug
app.set('view engine', 'pug');

// Obtener año actual y nombre del sitio
app.use( (req,res,next) =>{
    const year = new Date();
    res.locals.actualYear = year.getFullYear(); // desde el footer accedo a actualYear
    res.locals.nombreSitio = 'Agencia de viajes';
    next(); // pasame al otro middleware
})

//Definir carpeta pública
app.use(express.static('public'));

// Agregar router
app.use('/', router); // get, post, put, patch delete

app.listen(port, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
})