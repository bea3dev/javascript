//Crie uma função que retorne se uma string é um palíndromo.

// Define a função para verificar se a string é um palíndromo
function ehPalindromo(str) {
    // Remove espaços, transforma em minúsculas e remove caracteres especiais
    const textoLimpo = str.replace(/[\W_]/g, "").toLowerCase();

    // Reverte o texto e compara com o texto original
    const textoInvertido = textoLimpo.split("").reverse().join("");

    return textoLimpo === textoInvertido;
}

// Exemplo de uso
const exemplo1 = "A man a plan a canal Panama";
const exemplo2 = "palíndromo";

console.log(`"${exemplo1}" é um palíndromo?`, ehPalindromo(exemplo1)); // Saída: true
console.log(`"${exemplo2}" é um palíndromo?`, ehPalindromo(exemplo2)); // Saída: false
