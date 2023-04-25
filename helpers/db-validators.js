
const Role = require('../models/role')
const User = require('../models/usuario')

const esRolValido = async (rol = '') =>{

    const existeRol = await Role.findOne({ rol });
    if( !existeRol){
         throw new Error (`El rol ${ rol } no esta registrado en la BD`)
    }
  }

  const emailExiste = async (correo = '')=> {

  const existeEmail = await User.findOne({correo});
    if (existeEmail) {
      throw new Error(`Señor usuario este correo ${ correo } ya esta registrado`)
      
    }
  }

  module.exports = {
    esRolValido,
    emailExiste
  }