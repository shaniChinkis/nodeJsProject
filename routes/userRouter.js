const express = require('express')
const router=express.Router();
const userController=require('../controllers/userController')

router.get('/:userName/:password', userController.login);
router.get('/', userController.getNewUser);
router.post('/', userController.post);
router.put('/:id', userController.update);
router.delete('/:id',userController.delete);


module.exports = router;
