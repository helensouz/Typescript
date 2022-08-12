 export function unirObjetos<O1, O2, O3>(obj1: O1, obj2: O2, obj3: O3): O1 & O2 & O3{ //ao chamar a funcao ira inferir o tipo
    return {...obj1, ...obj2, ...obj3 }
 }

 const obj1 = {chave1: 'valor1'}
 const obj2 = {chave2: 'valor2'}
 const obj3 = {chave3: 'valor3'}

 const uniao = unirObjetos(obj1, obj2, obj3)
 console.log(uniao)