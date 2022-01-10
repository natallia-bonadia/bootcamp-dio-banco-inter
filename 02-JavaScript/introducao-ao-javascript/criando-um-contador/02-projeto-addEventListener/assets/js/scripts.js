var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

document.getElementById('incrementButton').addEventListener('click', increment)

function increment() {
  currentNumber ++
  currentNumberWrapper.innerHTML = currentNumber
}

document.getElementById('decrementButton').addEventListener('click', decrement)

function decrement() {
  currentNumber --
  currentNumberWrapper.innerHTML = currentNumber
}