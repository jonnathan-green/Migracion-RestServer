const {Router} = require('express');
const {check} = require('express-validator');
const Role = require('../models/role')
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
        //check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
        check('rol').custom( async (rol = '') =>{
          const existeRol = await Role.findOne({ rol });
          if( !existeRol){
               throw new Error (`El rol ${ rol } no esta registrado en la BD`)
          }
        }),
       validarCampos
       ], userPost)
  router.patch('/', userPatch )
  router.delete('/', userDelete )


 module.exports = router;