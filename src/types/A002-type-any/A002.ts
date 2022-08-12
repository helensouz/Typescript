//representa falta de tipo, ou qualquer tipo que quisermos

function showMessage(msg:any){
    return msg;
    
}

console.log(showMessage([1,2,3]))
console.log(showMessage('qualquer tipo'))