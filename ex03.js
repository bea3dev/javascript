//verifique se um número é par ou ímpar

function parouimpar (n) {
    if (n%2 ==0) {
        return "par!"
    } else {
        return "impar!"
    }
}
let res = parouimpar(3)
console.log(res)
