const {Router} = require('express');
const {userGet,  
       userPUT,  
       userPost, 
       userPatch,  
       userDelete} = require('../controllers/user.control')

const router = Router();

  router.put('/', userPUT)
  router.get('/', userGet )
  router.post('/', userPost)
  router.patch('/', userPatch )
  router.delete('/', userDelete )


 module.exports = router;