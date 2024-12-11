// crie uma função que retorne o maior de dois números

function maiornum(numA, numB) {
    if(numA > numB) {
        return(`O Número ${numA} é maior que o Número ${numB}`)
    } else {
        return(`O Número ${numB} é maior que o Número ${numA}`)
    }
}
console.log(maiornum(15, 15.9))
