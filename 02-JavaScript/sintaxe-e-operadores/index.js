const num1 = Number(prompt('Digite o primeiro número: '))
const num2 = Number(prompt('Digite o segundo número: '))

alert(comparaNumeros(num1, num2))

function comparaNumeros(num1, num2) {

  if (num1 !== Number || num2 !== Number) {
    return 'Defina dois números'
  }

  const soma = num1 + num2
  const comparacaoNumeros = num1 === num2 ? 'iguais' : 'diferentes'
  const comparacao10 = soma < 10 ? 'menor' : 'maior ou igual'
  const comparacao20 = soma < 20 ? 'menor' : 'maior ou igual'
  
  return `Os números ${num1} e ${num2} são ${comparacaoNumeros}. Sua soma é ${soma}, que é ${comparacao10} que 10 e ${comparacao20} que 20.`
}
