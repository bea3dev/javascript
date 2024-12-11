//. Crie uma função que retorne a soma dos números pares de uma lista. A função deve somar apenas os números pares de uma lista fornecida.

function somaNumeroPares(lista) {
    let soma = 0; /*inicializa a soma em 0*/
    for (let numero of lista) {
        if (numero % 2 === 0)/*verifica se o numero é par*/ {
            soma += numero; /*adiciona o numero par á soma*/
        }
    }
    return soma; //retorna a soma total
}

const lista1 = [1, 2, 3, 4, 5, 6];
console.log(`A soma dos números pares em [${lista1}] é:`, somaNumeroPares(lista1));

const lista2 = [7, 11, 13];
console.log(`A soma dos números pares em [${lista2}] é:`, somaNumeroPares(lista2));

const lista3 = [];
console.log(`A soma dos números pares em [${lista3}] é:`, somaNumeroPares(lista3));
