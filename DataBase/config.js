const mongoose = require('mongoose');

const dbConnection = async () =>{

    try {       // Es bueno hacer esto por si la base de datos tiene algun error
        
        await mongoose.connect(process.env.MONGODB_CNN);

        console.log('Bases de datos Online')

    } catch (error) {
        console.log(error)
        throw new Error(' Error al iniciar la base de datos')
    }
}

module.exports = {
    dbConnection
}