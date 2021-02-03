const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')

//roteamentos aqui
<<<<<<< HEAD
router.get('/', userController.login_form)

router.post ('/login', userController.login)
=======
router.get('/', userController.login)
>>>>>>> f01b00c415bef3818b7d6f0602ea18da3dc6ae76

router.get('/home', userController.home)

router.get('/cadastro', userController.cadastro)

router.get('/esqueciASenha', userController.esqueciASenha)

router.get('/atividadesComplementares', userController.atividadesComplementares)

router.get('/extensao', userController.extensao)

router.get('/perfilDoAluno', userController.perfilDoAluno)

router.post('/cadastrar', userController.cadastrar)

module.exports = router

