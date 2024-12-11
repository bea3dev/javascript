//. Substitua todas as vogais de uma string por '*'. A função deve trocar todas as vogais (maiúsculas e minúsculas) por '*'.

function substituiVogaisPorAsterisco(texto) {
    /*define uma expressão regular que reconhece todas as vogais*/
    const vogais = /[aeiouAEIOU]/g;
    return texto.replace(vogais, '*'); /*substitui todas as vogais por '*' */
}

const texto1 = "Olá, Mundo!";
console.log(`texto original: "${texto1}"`);
console.log(`Texto modificado: "${substituiVogaisPorAsterisco(texto1)}"`);

const texto2 = "aeiou";
console.log(`Texto original: "${texto2}"`);
console.log(`texto modificado: "${substituiVogaisPorAsterisco(texto2)}"`);
