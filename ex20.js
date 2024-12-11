//Crie uma função que retorne a soma dos dígitos de um número. A função deve somar os dígitos de um número inteiro.

function somaDosDigitos(numero) {
    return Math.abs(numero)/*garante que o numero seja positivo*/.toString()/*converte o numero para string */.split("")/*divide a string em um array de caracteres */.reduce((soma, digito) => soma + parseInt(digito), 0);/*soma os digitos */
}

const numero1 = 12345;
const resultado1 = somaDosDigitos(numero1);
console.log(`A soma dos dígitos de ${numero1} é: ${resultado1}`);

const numero2 = -987;
const resultado2 = somaDosDigitos(numero2);
console.log(`A soma dos dígitos de ${numero2} é ${resultado2}`);
