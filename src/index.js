const express = require('express');
const mongoose = require('mongoose');

const app = express();

const Usuarios = mongoose.model('Usuarios', new mongoose.Schema({
    tipo: String,
    estado: String,
}))

mongoose.connect('mongodb://mongo/mydatabase')
app.get('/', async (_req, res) => {
    console.log('listando... usuarios...')
    const usuarios = await Usuarios.find();
    return res.send(usuarios)
  })
  app.get('/crear', async (_req, res) => {
    console.log('creando...')
    await Usuarios.create({ tipo: 'Ezequiel', estado: 'Linuxero_Bb<3' })
    return res.send('ok')
  })

app.listen(3000);
console.log('Server on port', 3000)
