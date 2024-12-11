// Imprima a sequência de Fibonacci até o décimo termo.

function fibonacciAteDecimoTremo() {
    const sequencia = [0, 1];
    for (let i = 2; i < 10; i++) {
        const proximo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximo);
    }
    return sequencia;
}
console.log(fibonacciAteDecimoTremo());