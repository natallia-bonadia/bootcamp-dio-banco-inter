const maca = {
  value : 2
}

const laranja = {
  value : 3
}

const array = [1, 2, 3, 4, 5, 6]

function mapComThis(array, thisArg) {
  return array.map(function(item) {
    return item * this.value
  }, thisArg)
}

console.log('this -> maçã', mapComThis(array, maca))
console.log('this -> laranja', mapComThis(array, laranja))

function mapSemThis(array) {
  return array.map(item => item * 4)
}

console.log(mapSemThis(array))