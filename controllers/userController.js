const User = require('../models/User')


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

exports.cadastrar = function(req, res) {
    // console.log(req.body);
    let user = new User(req.body);
    user
        .create()
        .then(function(result) {
            res.render('pages/login', { layout: 'pages/login' });
        })
        .catch(function(err) {
            res.send(err);
        });
};