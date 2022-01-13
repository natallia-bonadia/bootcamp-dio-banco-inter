const lista = [
  {
    name: 'sabao',
    value: 25
  },
  {
    name: 'arroz',
    value: 17.50
  },
  {
    name: 'leite',
    value: 4.80
  },
  {
    name: 'chocolate',
    value: 7
  }
]

function compras (listaPrecos, saldoDisponivel) {
  const totalLista = listaPrecos.reduce(((acc, atual) => acc - atual.value), saldoDisponivel)
  return totalLista
}

console.log(compras(lista, 100))

