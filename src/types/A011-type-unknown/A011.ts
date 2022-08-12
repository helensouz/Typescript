//usamos quando nao sabemos o tipo de dado que iremos receber

let x: unknown;


 x = 100;
 x = 'ola';

 const y = 800;

 if(typeof x === 'number'){ 
     console.log('invalido')
 } 
