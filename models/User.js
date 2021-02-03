const pool = require("../db")

let User = function(data) {
    this.data = data
    this.errors = []
}

User.prototype.login = function() {
    return new Promise((resolve, reject) => {
        this.readByEmail().then((usuarioRecuperado) => {
            if (usuarioRecuperado && usuarioRecuperado.senha == this.data.senha) {
                resolve('Login confere')
            } else {
                reject('Dados de login não conferem')
            }
        }).catch(() => {
            reject('Erro ao fazer login')
        });
    });
};

User.prototype.readByEmail = function() {
    const consulta = "SELECT * FROM users u WHERE u.email=$1";
    const values = [this.data.email];

    return new Promise((resolve, reject) => {
        pool.query(consulta, values, (error, results) => {
            if (error) {
                reject("E-mail não encontrado");
            } else {
                usuarioRecuperado = results.rows[0];
                resolve(usuarioRecuperado);
            }
        });
    });
};

User.prototype.create = function() {
    const consulta = 'INSERT INTO users(nome, sobrenome, email, cpf, telefone, instituicao, cidade, senha, nascimento) values($1, $2, $3, $4, $5, $6, $7, $8, $9)'
    const values = [this.data.nome, this.data.sobrenome, this.data.email, this.data.cpf, this.data.telefone, this.data.instituicao, this.data.cidade, this.data.senha, this.data.nascimento]
    return new Promise((resolve, reject) => {
        pool.query(consulta, values, (error, results) => {
<<<<<<< HEAD
            if (error) {
=======
            if(error) {
>>>>>>> f01b00c415bef3818b7d6f0602ea18da3dc6ae76
                reject("Erro ao cadastrar o aluno!")
            } else {
                resolve("Usuário inserido com sucesso!")
            }
<<<<<<< HEAD
        });
    });
=======
        }); 
    })

>>>>>>> f01b00c415bef3818b7d6f0602ea18da3dc6ae76
};

module.exports = User