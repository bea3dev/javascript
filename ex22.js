// Crie uma função que retorne o valor absoluto de um número. Utilize o método para retornar o valor absoluto.

function valorAbsoluto(numero) {
    return Math.abs(numero); /*usa o metodo Math.abs para obter o valor absoluto*/
}

const numero1 = 10;
const numero2 = -25;

console.log(`o valor absoluto de ${numero1} é:`, valorAbsoluto(numero1));
console.log(`o valor absoluto de ${numero2} é:`, valorAbsoluto(numero2));