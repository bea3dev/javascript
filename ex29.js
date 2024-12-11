//Verifique se uma lista está em ordem crescente. A função deve retornar true se a lista estiver em ordem crescente

function estaEmOrdemCrescente(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] >lista[i + 1]) {
            return false; //retorna false se encontrar um elemento fora de ordem
        }
    }
    return true; //retorna true se todos os elementos estiverem em ordem 
}

const lista1 = [1, 2, 3, 4, 5];
console.log(`A lista [${lista1}] está em ordem crescente?`, estaEmOrdemCrescente(lista1));

const lista2 = [1, 4, 3, 6, 8];
console.log(`A lista [${lista2}] está em ordem crescente?`, estaEmOrdemCrescente(lista2));

const lista3 = [4];
console.log(`A lista [${lista3}] está em ordem crescente?`, estaEmOrdemCrescente(lista3));

//usando every()

function estaEmOrdemCrescente(lista) {
    return lista.every((numero, i) => i === 0 || lista[i - 1] <= numero);
}

// Testando
console.log(estaEmOrdemCrescente([1, 2, 3, 4, 5])); // Saída: true
console.log(estaEmOrdemCrescente([1, 3, 2, 4, 5])); // Saída: false
console.log(estaEmOrdemCrescente([]));              // Saída: true
console.log(estaEmOrdemCrescente([5]));             // Saída: true
