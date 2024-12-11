//Contador de Vogais 
// Usando For
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"]
  let count = 0

  for (var caracter = 0; caracter < str.length; caracter++){
    for (var vowel = 0; vowel < vowels.length; vowel++){
        if ( str[caracter] == vowels[vowel]){
            count++
        }
    }
  }
  return count
}
const result = countVowels("shwjhklm hsnxz")
console.log(result)
