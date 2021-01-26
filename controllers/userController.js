const User = require('../models/User')

exports.home= function (req, res) {
    res.render('pages/login', { layout: 'pages/login' })
}

exports.cadastro = function (req, res) {
    res.render('pages/cadastro', { layout: 'pages/cadastro' })
}

exports.esqueciASenha = function (req, res) {
    res.render('pages/esqueciAsenha', { layout: 'pages/esqueciAsenha' })

}

exports.atividadesComplementares = function (req, res) {
    res.render('pages/atividadesComplementares')
}

exports.extensao = function (req, res) {
    res.render('pages/extensao')
}

exports.perfilDoAluno = function (req, res) {
    res.render('pages/perfilDoAluno')
}

exports.cadastrar = function (req, res) {
        // console.log(req.body);
        let user = new User(req.body)
        user.create()
        res.render('pages/atividadesComplementares')
}