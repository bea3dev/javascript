//. Crie uma função que retorne os divisores de um número. A função deve listar todos os divisores de um número.

function listarDivisores(numero) {
    if (numero <= 0) {
        return "Número inválido. Insira um número inteiro positivo.";
    }
    const divisores = []; /*Array para armazenar os divisores */
    for(let i = 1; i <= numero; i++){
        if (numero % i === 0) {
            divisores.push(i);/* adiciona o divisor ao array*/
        }
    }
    return divisores;
}

const numero1 = 12;
console.log(`Os divisores de ${numero1} são:`, listarDivisores(numero1));

const numero2 = -25;
console.log(`Os divisores de ${numero2} são:`, listarDivisores(numero2));

const numero3 = 0;
console.log(`Os divisores de ${numero3} são:`, listarDivisores(numero3));