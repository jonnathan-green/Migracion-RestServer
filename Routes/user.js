const {Router} = require('express');
const {check} = require('express-validator');
const {userGet,  
       userPUT,  
       userPost, 
       userPatch,  
       userDelete} = require('../controllers/user.control')

const router = Router();

  router.put('/:id', userPUT)
  router.get('/', userGet )
  router.post('/',[
               check('correo','El correo es invalido').isEmail(),
                     ], userPost)
  router.patch('/', userPatch )
  router.delete('/', userDelete )


 module.exports = router;