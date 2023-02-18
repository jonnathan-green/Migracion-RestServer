const { request, response} = require('express');

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

  const userPost = (req, res =  response) => {

    const body = req.body;
    res.json({
        msg: 'post API',
        body
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