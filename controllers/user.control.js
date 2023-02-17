const {response} = require('express');

 const userGet = (req, res = response) => {
    res.json({
        msg: 'get API - Controlador'
    })
  }

  const userPUT = (req, res = response) => {
    res.json({
        msg: 'put API Controlador '
    })
  }

  const userPost = (req, res =  response) => {
    res.json({
        msg: 'post API'
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