//. Calcule a raiz quadrada de um número. A função deve retornar a raiz quadrada.


function calcularRaizQuadrada(numero) {
    if (numero < 0) {
        return "Número inváldo. A raiz quadrada de um número negativo não é real";
    }
    return Math.sqrt(numero); /*usa o metodo Math.sqrt para qualcular a raiz quadrada*/
}

const numero1 = 16;
const numero2 = -9;

console.log(`A raiz quadrada de ${numero1} é:`, calcularRaizQuadrada(numero1));
console.log(`A raiz quadrada de ${numero2} é:`, calcularRaizQuadrada(numero2));