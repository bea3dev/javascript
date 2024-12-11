// inverta uma string
 //com loop FOR
function inverterString(str) {
    var o = '';
    for (var i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
}
console.log(inverterString("testando inversão"));

// usando três métodos em uma declaração
function inverterString(str) {
    return str.split('').reverse().join('');
}

console.log(inverterString("Hello, World!"));