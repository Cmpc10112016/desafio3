const express = require('express');
const Contenedor = require('./container/Clase desafio3');
const classContainer = require ('./container/Clase desafio3')

const app = express();
const PORT = 8080
const archivo = new classContainer('productos.json')



const server= app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto: 8080')
})

app.get('/products', async(req, res)=>{
    const prods = await archivo.leer()
    res.send(Productos= 'prods')
})

app.get('/random', async(req,res)=>{
    const prods = await archivo.leer()
    const random = parseInt(Math.random()*prods.length)
    res.send({Productos: prods[random]})
})