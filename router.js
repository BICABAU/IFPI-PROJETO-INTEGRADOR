const express = require('express')
const router = express.Router()

const userController = require('./controllers/userController')

//roteamentos aqui
router.get('/', userController.login)

router.get('/home', userController.home)

router.get('/cadastro', userController.cadastro)

router.get('/esqueciASenha', userController.esqueciASenha)

router.get('/atividadesComplementares', userController.atividadesComplementares)

router.get('/extensao', userController.extensao)

router.get('/perfilDoAluno', userController.perfilDoAluno)

router.post('/cadastrar', userController.cadastrar)

module.exports = router

