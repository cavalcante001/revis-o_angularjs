// Constructor Function

var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

var carlos = new Pessoa("Carlos", 25);
console.log(carlos);

var carlos = {};
Pessoa.call(carlos, "Carlos", 25);
console.log(carlos);