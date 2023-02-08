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
        this.app.get('/app', (req, res) => {
            res.json({
                msg: 'get API'
            })
          })

          this.app.put('/app', (req, res) => {
            res.json({
                msg: 'put API'
            })
          })

          this.app.post('/app', (req, res) => {
            res.json({
                msg: 'post API'
            })
          })

          this.app.delete('/app' , (req, res) => {
            res.json({
                msg: 'delete API'
            })
          })
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('El servidor esta corriendo en el pueerto:', this.port);
        });
    }

}

module.exports = Server;