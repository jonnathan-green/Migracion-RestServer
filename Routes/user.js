const {Router} = require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos') ;
const {userGet,  
       userPUT,  
       userPost, 
       userPatch,  
       userDelete} = require('../controllers/user.control')

const router = Router();

  router.put('/:id', userPUT)
  router.get('/', userGet )
  router.post('/',[
       check('nombre', 'El nombre es obligatorio').not().isEmpty(),
       check('passsword',' El password debe ser mas de 6 letras').isLength({ max: 6 }),
       check('correo', 'El correo es invalido').isEmail(),
       check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
       validarCampos
       ], userPost)
  router.patch('/', userPatch )
  router.delete('/', userDelete )


 module.exports = router;