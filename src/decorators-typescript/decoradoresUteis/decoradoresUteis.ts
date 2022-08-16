//tipo do construtor da classe

type Constructor = new(...args: any []) => any;

//Classes
function decoradorClasse(construtor: Constructor): any{
    //chamado na criacao da classe
    console.log('classe')
    console.log(construtor)
    console.log('#####')
}

//metodo de instancia(normal)
function decoradorMetodo(
    protoripoClasse: any, 
    nomeDoMetodo: string,
    descriptorPropriedade: PropertyDescriptor,
): any{
    //chamado na criacao do metodo (nao precisa chamar o metodo)
    console.log('Metodo normal')
    console.log(protoripoClasse)
    console.log(nomeDoMetodo)
    console.log(descriptorPropriedade)
    console.log('###')
}

//metodo estatico
function decoradorDeMetodoEstatico(
    classConstructor: Constructor,
    nomeDoMetodo: string,
    descritorDePropriedade: PropertyDescriptor,
  ): any {
    // Chamado na criação do método (não precisa chamar o método)
    console.log('MÉTODO ESTÁTICO');
    console.log(classConstructor);
    console.log(nomeDoMetodo);
    console.log(descritorDePropriedade);
    console.log('###');
  
    // Retorno pode ser omitido
    return {
      // Use get/set OU value
      enumerable: true,
      configurable: true,
    };
  }
  
  // Parâmetro de método
  function decoradorDeParametroDeMetodo(
    prototipoDaClasse: any,
    nomeDoMetodo: string,
    indiceDaPropriedade: number,
  ): any {
    // Chamado na criação do método
    console.log('PARÂMETRO DE MÉTODO');
    console.log(prototipoDaClasse);
    console.log(nomeDoMetodo);
    console.log(indiceDaPropriedade);
    console.log('###');
  
    // Retorno é ignorado
  }
  
  // Parâmetro de método estático
  function decoradorDeParametroDeMetodoEstatico(
    classConstructor: Constructor,
    nomeDoMetodo: string,
    indiceDaPropriedade: number,
  ): any {
    // Chamado na criação do parâmetro (não precisa chamar o método)
    console.log('PARÂMETRO DE MÉTODO ESTÁTICO');
    console.log(classConstructor);
    console.log(nomeDoMetodo);
    console.log(indiceDaPropriedade);
    console.log('###');
  
    // Retorno é ignorado
  }
  
  // Propriedade
  function decoradorDePropriedade(
    prototipoDaClasse: any,
    nomePropriedade: string,
  ): any {
    // Chamado na criação da propriedade
    console.log('DECORADOR DE PROPRIEDADE');
    console.log(prototipoDaClasse);
    console.log(nomePropriedade);
    console.log('###');
  
    // Retorno pode ser omitido
    // Use get e set para manipular o valor da propriedade
    let valorPropriedade: any;
    return {
      enumerable: true,
      configurable: true,
      get: () => valorPropriedade,
      set: (valor: any) => {
        if (typeof valor === 'string') {
          valorPropriedade = valor.split('').reverse().join('');
          return;
        }
        valorPropriedade = valor;
      },
    };
  }
  
  // Propriedade estática
  function decoradorDePropriedadeEstatica(
    classConstructor: any,
    nomePropriedade: string,
  ): any {
    // Chamado na criação da propriedade estática
    console.log('DECORADOR DE PROPRIEDADE ESTÁTICA');
    console.log(classConstructor);
    console.log(nomePropriedade);
    console.log('###');
  
    // Retorno pode ser omitido
    return {
      // Use get/set OU value
      enumerable: true,
      configurable: true,
    };
  }
  
  // Getter/Setter
  function decoradorDeGetterESetterNormal(
    prototipoDaClasse: any,
    nomePropriedade: string,
    descritorDePropriedade: PropertyDescriptor,
  ): any {
    // Chamado na criação do método
    // (só pode ser aplicado no getter ou no setter - não em ambos)
    console.log('GETTER/SETTER normal');
    console.log(prototipoDaClasse);
    console.log(nomePropriedade);
    console.log(descritorDePropriedade);
    console.log('###');
  
    // Retorno pode ser omitido
    return {
      // Use get/set OU value
      enumerable: true,
      configurable: true,
    };
  }
  
  // Getter/Setter estático
  function decoradorDeGetterESetterEstatico(
    classConstructor: Constructor,
    nomePropriedade: string,
    descritorDePropriedade: PropertyDescriptor,
  ): any {
    // Chamado na criação do método
    // (só pode ser aplicado no getter ou no setter - não em ambos)
    console.log('GETTER/SETTER estático');
    console.log(classConstructor);
    console.log(nomePropriedade);
    console.log(descritorDePropriedade);
    console.log('###');
  
    // Retorno pode ser omitido
    return {
      // Use get/set OU value
      enumerable: true,
      configurable: true,
    };
  }
  
  // A classe e o uso dos decorators
  
  @decoradorClasse
  export class UmaPessoa {
    @decoradorDePropriedade
    nome: string;
    sobrenome: string;
    idade: number;
  
    @decoradorDePropriedadeEstatica
    static propriedadeEstatica = 'VALOR PROPRIEDADE ESTÁTICA';
  
    constructor(nome: string, sobrenome: string, idade: number) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
    }
  
    @decoradorMetodo
    metodo(@decoradorDeParametroDeMetodo msg: string): string {
      return `${this.nome} ${this.sobrenome}: ${msg}`;
    }
  
    @decoradorDeMetodoEstatico
    static metodoEstatico(
      @decoradorDeParametroDeMetodoEstatico msg: string,
    ): string {
      return UmaPessoa.propriedadeEstatica + ' - ' + msg;
    }
  
    get nomeCompleto(): string {
      return this.nome + ' ' + this.sobrenome;
    }
  
    @decoradorDeGetterESetterNormal
    set nomeCompleto(valor: string) {
      const palavras = valor.split(/\s+/g);
      const primeiroNome = palavras.shift();
      if (!primeiroNome) return;
      this.nome = primeiroNome;
      this.sobrenome = palavras.join(' ');
    }
  
    @decoradorDeGetterESetterEstatico
    static get staticPropertyGetterSetter(): string {
      return UmaPessoa.propriedadeEstatica;
    }
  
    static set staticPropertyGetterSetter(value: string) {
      UmaPessoa.propriedadeEstatica = value;
    }
  }
  
  // Uso da classe
  
  const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
  pessoa.nomeCompleto = 'João Silva Oliveira';
  const metodo = pessoa.metodo('Olá mundo!');
  const metodoEstatico = UmaPessoa.metodoEstatico('Olá mundo!');
  console.log(pessoa);
  console.log(metodo);
  console.log(metodoEstatico);
  console.log(UmaPessoa.propriedadeEstatica);