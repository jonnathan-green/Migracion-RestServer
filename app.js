require('dotenv').config();

const Server = require('./models/server')    // Ya esta la instancia del server

const server = new Server();

server.listen();

// Migracion rest nuevo repositorio C:\Users\WINDOWS10\Documents\Jonnathan Green\Cursos\REST_Server