//Crie uma função que multiplique todos os elementos de uma lista. A função deve multiplicar todos os elementos da lista e retornar o resultado.

function multiplicarElementos(lista) {
    if (lista.length === 0) {
        return 0; // Retorna 0 para listas vazias
    }

    let produto = 1; // Inicializa o produto em 1
    for (let numero of lista) {
        produto *= numero; // Multiplica cada elemento pelo acumulador
    }
    return produto; // Retorna o produto final
}

const lista1 = [1, 2, 3, 4];
console.log(`O produto dos elementos de [${lista1}] é:`, multiplicarElementos(lista1));
// Saída: O produto dos elementos de [1,2,3,4] é: 24

const lista2 = [5, 0, 7];
console.log(`O produto dos elementos de [${lista2}] é:`, multiplicarElementos(lista2));
// Saída: O produto dos elementos de [5,0,7] é: 0

const lista3 = [];
console.log(`O produto dos elementos de [${lista3}] é:`, multiplicarElementos(lista3));
// Saída: O produto dos elementos de [] é: 0


//usando reduce()

function multiplicarElementos(lista) {
    if (lista.length === 0) {
        return 0; // Retorna 0 para listas vazias
    }

    return lista.reduce((produto, numero) => produto * numero, 1);
}


console.log(multiplicarElementos([1, 2, 3, 4])); // Saída: 24
console.log(multiplicarElementos([5, 0, 7]));    // Saída: 0
console.log(multiplicarElementos([]));           // Saída: 0
