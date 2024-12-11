//Remova todos os espaços de uma string

function rmoverEspacos(str) {
    return str.replace(/\s+/g, ""); /*substitui todos os espaços usando o método replace e uma expressão regular*/
}

const texto = "Olá, como voçê está?";
const resultado = rmoverEspacos(texto);

console.log(resultado);