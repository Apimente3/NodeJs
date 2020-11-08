/* const express = require('express'); */
import express from 'express';
import router from './routes/index.js'
const app = express();

const port = process.env.PORT || 3000;

// Agregar router
app.use('/', router); // get, post, put, patch delete

// Habilitar pug
app.set('view engine', 'pug');

app.listen(port, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
})