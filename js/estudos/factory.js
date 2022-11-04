var criarPessoa = function (nome, idade) {
    return {
        nome,
        idade
    };
}

var maria = criarPessoa("Maria", 20);
console.log(maria);

var factoryApi = function() {

    _getLinkGoogle = function() {
        return 'https://www.google.com.br';
    }

    return {
        obterLink: _getLinkGoogle
    };
}
