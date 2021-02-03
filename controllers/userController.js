const User = require('../models/User')

<<<<<<< HEAD

exports.cadastro = function(req, res) {
    res.render('pages/cadastro', { layout: 'pages/cadastro' })
}

exports.login_form = function(req, res) {
    res.render('pages/login', { layout: 'pages/login' })
}



exports.login = function(req, res) {
    let user = new User(req.body);
    user.login().then(function(result) {
        console.log(result);
        res.render('pages/home')
    }).catch(function(err) {
        res.send(err)
    })
=======
exports.login= function (req, res) {
    res.render('pages/login', { layout: 'pages/login' })
}

exports.home= function(req, res) {
    res.render('pages/home')
}

exports.cadastro = function (req, res) {
    res.render('pages/cadastro', { layout: 'pages/cadastro' })
>>>>>>> f01b00c415bef3818b7d6f0602ea18da3dc6ae76
}

exports.esqueciASenha = function(req, res) {
    res.render('pages/esqueciAsenha', { layout: 'pages/esqueciAsenha' })

}

exports.home = function(req, res) {
    res.render('pages/home')
}

exports.atividadesComplementares = function(req, res) {
    res.render('pages/atividadesComplementares')
}

exports.extensao = function(req, res) {
    res.render('pages/extensao')
}

exports.perfilDoAluno = function(req, res) {
    res.render('pages/perfilDoAluno')
}

<<<<<<< HEAD
exports.cadastrar = function(req, res) {
    // console.log(req.body);
    let user = new User(req.body);
    user
        .create()
        .then(function(result) {
            res.render('pages/login', { layout: 'pages/login' });
        })
        .catch(function(err) {
=======
exports.cadastrar = function (req, res) {
        // console.log(req.body);
        let user = new User(req.body);
        user
            .create()
            .then(function (result) {
            res.render('pages/login', { layout: 'pages/login' });
        })
        .catch(function (err){
>>>>>>> f01b00c415bef3818b7d6f0602ea18da3dc6ae76
            res.send(err);
        });
};