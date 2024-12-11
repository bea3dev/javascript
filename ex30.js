// Crie uma função que conte quantos números ímpares existem em uma lista. A função deve contar e retornar a quantidade de números ímpares
    
function contarNumeroImpar(lista) {
    let contador = 0; //inicializa o contador em 0
    for (let numero of lista) {
        if (numero % 2 !== 0) /*verifica se o número é ímpar*/ {
            contador++; //incrementa o contador se o número for ímpar
        }
    }
    return contador; //retorna a quatidade de números ímpares 
}

const lista1 = [1, 2, 3, 4, 5, 6, 7];
console.log(`A lista [${lista1}] tem`, contarNumeroImpar(lista1), "números ímpares.");

const lista2 = [2, 4, 6, 8];
console.log(`A lista [${lista2}] tem`, contarNumeroImpar(lista2), "números ímpares.")

//usando filter()

function contarNumerosImpares(lista) {
    return lista.filter(numero => numero % 2 !== 0).length;
}

// Testando
console.log(contarNumerosImpares([1, 2, 3, 4, 5, 6, 7])); // Saída: 4
console.log(contarNumerosImpares([2, 4, 6, 8]));          // Saída: 0
console.log(contarNumerosImpares([]));                   // Saída: 0
