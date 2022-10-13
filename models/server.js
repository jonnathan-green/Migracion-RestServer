const express = require('express')

class Server {

    constructor(){
        this.app = express();
        this.port =process.env.PORT

        //middelwares Funciones que nos añaden otra funcinalidad a nuestro WeServer
        this.middlewares();

        //Rutas de la apliacion
        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.get('/', (req, res) => {
            res.send('Hello World')
          })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriend en puerto', this.port);
        });
    }

}

module.exports = Server;