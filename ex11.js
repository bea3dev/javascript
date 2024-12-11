// Verifique se um número está presente em uma lista
 
function verificarNumero(lista, numero) {
  if (lista.includes(numero)) {
    return `O número ${numero} está na lista.`;
  } else {
    return `O número ${numero} NÃO está na lista.`;
  }
}
const numeros = [1, 2, 3, 4, 5];

console.log(verificarNumero(numeros, 1));
console.log(verificarNumero(numeros, 6));
