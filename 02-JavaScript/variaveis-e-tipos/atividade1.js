// SOLUÇÃO 1 (COM MÉTODOS)

function verificaPalindromo1(string) {
  if (!string) return 'string inexistente'

  return string.split('').reverse().join('') === string
}

console.log(verificaPalindromo1('abba'))


// SOLUÇÃO 2 (COM FOR)

function verificaPalindromo2(string) {
  if (!string) return 'string inexistente'

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(verificaPalindromo2('omo'))