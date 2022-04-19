// Importo el paquete EXPRESS
// const express = require('express') Forma vieja 

import express from 'express'

// Importar las rutas del Api

import {rutas} from '../routes/rutas.js'

export class Servidor{

    constructor(){

        // Atributo app donde almaceno la funcionalidad de express
        this.app = express()
        this.atenderServicios()

    }

    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendido en ${process.env.PORT} que chimba mor`)
        })
        
    }

    atenderServicios(){
        this.app.use('/',rutas)
    }

    conectarConBD(){}

}
