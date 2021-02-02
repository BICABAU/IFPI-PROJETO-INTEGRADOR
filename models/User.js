const pool = require ("../db")

let User = function (data) {
    this.data = data
    this.errors = []
}

User.prototype.create = function () {
    console.log(this.data);
    //TODO inserir user no banco

    const consulta = 'INSERT INTO users(nome, sobrenome, email, cpf, telefone, instituicao, cidade, senha, nascimento) values($1, $2, $3, $4, $5, $6, $7, $8, $9)'
    const values = [this.data.nome, this.data.sobrenome, this.data.email, this.data.cpf, this.data.telefone, this.data.instituicao, this.data.cidade, this.data.senha, this.data.nascimento]
    return new Promise((resolve, reject) => {
        pool.query(consulta, values, (error, results) => {
            if(error) {
                reject("Erro ao cadastrar o aluno!")
            } else {
                resolve("Usuário inserido com sucesso!")
            }
        }); 
    })

};

module.exports = User