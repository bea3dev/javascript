//Verifique se dois números são múltiplos. A função deve retornar true ou false conforme os números.

function saoMultiplos(numero1, numero2) {
    return numero1 % numero2 ===0 || numero2 % numero1 ===0;
}

const num1 = 12;
const num2 = 4;

console.log(`${num1} e ${num2} são múltiplos?`, saoMultiplos(num1, num2));

console.log(`10 e 3 são múltiplos?`, saoMultiplos(17, 5));
