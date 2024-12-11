// Crie uma função que conte quantas vezes um caractere aparece em uma string.

function contarCaractere(str, caractere) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caractere) {
            contador++;
        }
    }
    return contador;
}
const texto = "banana";
const caractere = "a";
const resultado = contarCaractere(texto, caractere);

console.log(`O caractere "${caractere}" aprece ${resultado} vezes`);