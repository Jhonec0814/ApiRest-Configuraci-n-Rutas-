// Importanto el paquete dotenv
// require('dotenv').config() // Forma tradicional
import 'dotenv/config' // Forma actual

// Importo la clase Servidor
import {Servidor} from './Server/Servidor.js'

// Creo un objeto de la clase Servidor
// Los Objetos son Variables

let servidor = new Servidor()

// Llamo al método encender servidor

servidor.encenderServidor()
