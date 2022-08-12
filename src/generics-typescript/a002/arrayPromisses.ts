const arrayNumero: Array<number> = [1, 2,3 ,4,5]
console.log(arrayNumero)

async function promisseAsync(){
    return 1
}


function minhaPromisse(): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000)
    })
}

promisseAsync().then(resultado => console.log(resultado + 1))