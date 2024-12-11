//Crie uma função que ordene uma lista de números, em ordem crescente.

function ordenarNumeros(lista) {
    return lista.sort((a, b) => a - b); // Função de comparação para ordenar em ordem crescente
}

const numeros = [5, 3, 8, 1, 2, 9];
const numerosOrdenados = ordenarNumeros(numeros);

console.log("Lista ordenada:", numerosOrdenados); 
