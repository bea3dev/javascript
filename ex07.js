//mostrando se um número é primo ou não

function numprimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i == 0){
            return false;
        }
    }
    return true;
}
console.log(numprimo(59));

/*const eprimo = numero => {
    if (numero == 0 || numero == 1 || numero == 4) return false;
    for (let c = 2 ; c < numero / 2; c++){
        if (numero % c == 0) return false;
    }
    return true;
}
console.log(eprimo(6))*/
