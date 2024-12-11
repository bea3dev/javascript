//. Verifique se uma string contém uma substring.A função deve retornar true ou false se a substring for encontrada.

function contemSubstring(texto, substring) {
    return texto.includes(substring); /*usa o método includes para verificar a substring*/
}

const texto1 = "Aprender JavaScript é divertido!:";
const substring1 = "JavaScript";
console.log(`A string contém "${substring1}"?`, contemSubstring(texto1, substring1));

const substring2 = "Python";
console.log(`A string contém "${substring2}"?`, contemSubstring(texto1, substring2));
