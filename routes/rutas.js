import express from 'express'

// Importo el ControladorRoom

import { ControladorHabitacion } from '../controllers/ControladorRoom.js'

// Aquí van a quedar todas las rutas que yo defino en mi servidor
export let rutas = express.Router()

let controladorHabitacion = new ControladorHabitacion()

// Creo un objeto de la clase ControladorRoom


// Defino rutas


// Rutas para los servicios de habitaciones
// 1. servicio agregar habitacion

rutas.post('/api/v1/habitaciones/', controladorHabitacion.insertar)


//2. Servicio para buscar TODAS las habitaciones
rutas.get('/api/v1/habitaciones/', controladorHabitacion.buscarTodos)


//3. Servicio para buscar por ID
rutas.get('/api/v1/habitaciones/:id/', controladorHabitacion.buscarPorID)


//4. Servicio cambiar habitaciones
rutas.put('/api/v1/habitaciones/:id/', controladorHabitacion.editar)


//5.Servicio eliminar habitaciones
rutas.delete('/api/v1/habitaciones/:id/', controladorHabitacion.eliminar )
// Rutas para los servicios de reservas
