function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1= {
  nome: 'Maria',
  idade: 20
}

const pessoa2= {
  nome: 'Marta',
  idade: 26
}

const pessoa3= {
  nome: 'Luisa',
  idade: 16
}
console.log(calculaIdade.call(pessoa1, 2))
console.log(calculaIdade.apply(pessoa1, [2]))

console.log(calculaIdade.call(pessoa2, 10))
console.log(calculaIdade.apply(pessoa2, [10]))

console.log(calculaIdade.call(pessoa3, 7))
console.log(calculaIdade.apply(pessoa3, [7]))
