require('dotenv').config();

const Server = require('./models/server')    // Ya esta la instancia del server

const server = new Server();

server.listen();

// Migracion C:\Users\WINDOWS10\Documents\Jonnathan Green\Cursos\N ode.js\Seccion8_RestServer