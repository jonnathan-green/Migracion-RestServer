const express = require('express')
const cors = require ('cors');
const {dbConnection} = require('../DataBase/config');
class Server {

    constructor(){
        this.app = express();
        this.port =process.env.PORT;
        this.userPAth = '/app/users';

        //Conectar a base de datos
        this.conectarDB();

        //middelwares Funciones que nos añaden otra funcinalidad a nuestro WeServer
        this.middlewares();

        //CORS
        this.app.use(cors() );

        //Lectura y Parceo del body 
        this.app.use(express.json());

        //Rutas de la apliacion
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
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