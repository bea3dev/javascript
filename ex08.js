// crie uma função que retorne a média de uma lista de números

let lista = [4, 5, 8, 7, 9, 5];
function calcmedia(lista) {
    let soma = 0;
    for(let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma/lista.length;
}
console.log(calcmedia(lista));