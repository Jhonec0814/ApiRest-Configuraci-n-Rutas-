import express from 'express'

// Aquí van a quedar todas las rutas que yo defino en mi servidor
export let rutas = express.Router()

// Defino rutas

// Rutas para los servicios de habitaciones
// 1. servicio agregar habitacion

rutas.post('/api/v1/rooms/', function (req, res) {
    res.send('Hello World')
  })

//2. Servicio para buscar TODAS las habitaciones
rutas.get('/api/v1/rooms/', function (req, res) {
    res.send('Hello World, hello america, quick question, are you brown cow stunning?')
  })


// Rutas para los servicios de reservas
