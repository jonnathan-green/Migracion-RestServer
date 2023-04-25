const { request, response} = require('express');
const bcrypt = require('bcryptjs')
const User = require('../models/usuario');

 const userGet = (req = request, res = response) => {

  const {q, nombre = 'No name', page = 1, limit}  = req.query;
    res.json({
        msg: 'get API - Controlador',
        q, 
        nombre,
        page,
        limit
    })
  }

  const userPUT = (req, res = response) => {

    const {id} = req.params;
        res.json({
        msg: 'put API Controlador ',
        id
    })
  }

  const userPost = async (req, res =  response) => {
          
    const {nombre, correo, password, rol} = req.body;
    const user = new User({nombre, correo, password, rol})   // la instancia creada

    //Verificar que el correo exista
    //const existeEmail = await User.findOne({correo});
    //if (existeEmail) {
    // return res.status(400).json({
    //   msg: 'Señor usuario este correo ya existe, por favor validelo y ajustelo'
   //  })
      
    //}

    //Encriptar o hacer el hash de la contraseña 
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt)

    // guardar en BD 
    await user.save();
    res.json({
        user
    })
  }

  const userPatch = (req, res= response) => {
    res.json({
        msg: 'patch API'
    })
  }

  const userDelete = ( req, res = response ) => {
    res.json({
        msg: 'Delete API - Controlador '
    })
  }


  module.exports= {
    userGet,
    userPUT,
    userPost,
    userPatch,
    userDelete,
    
  }