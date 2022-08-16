//eslint-disable @typescript-eslint/no-namespace
//sistema de modulos
//É criado como se fosse um escopo 
var MeuNameSpace;
(function (MeuNameSpace) {
    MeuNameSpace.nome = 'helen';
    var PessoaNameSpace = /** @class */ (function () {
        function PessoaNameSpace(nome) {
            this.nome = nome;
        }
        return PessoaNameSpace;
    }());
    MeuNameSpace.PessoaNameSpace = PessoaNameSpace;
    var pessoa = new PessoaNameSpace('valdir');
    console.log(pessoa);
    var OutroNameSpace;
    (function (OutroNameSpace) {
        OutroNameSpace.nomeDoNamespace = 'nome de outro namespace';
    })(OutroNameSpace = MeuNameSpace.OutroNameSpace || (MeuNameSpace.OutroNameSpace = {}));
})(MeuNameSpace || (MeuNameSpace = {}));
var pessoadonamespace = new MeuNameSpace.PessoaNameSpace('Helen 2');
console.log(pessoadonamespace);
console.log(MeuNameSpace.OutroNameSpace);
console.log(MeuNameSpace.OutroNameSpace.nomeDoNamespace);
