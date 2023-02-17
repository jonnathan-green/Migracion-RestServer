const express = require('express')
const cors = require ('cors')
class Server {

    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.userPAth = '/app/users';

        //middelwares Funciones que nos añaden otra funcinalidad a nuestro WeServer
        this.middlewares();

        //CORS
        this.app.use(cors() );

        //Lectura y Parcero del body 
        this.app.use(express.json());

        //Rutas de la apliacion
        this.routes();
    }

    middlewares(){
        this.app.use(express.static('public'))
    }

    routes(){
        
        this.app.use(this.userPAth, require('../Routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('El servidor esta corriendo en el puerto:', this.port);
        });
    }

}

module.exports = Server;