var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

const incrementButton = document.getElementById('incrementButton')

incrementButton.onclick = function() {
  currentNumber ++
  currentNumberWrapper.innerHTML = currentNumber
}

const decrementButton = document.getElementById('decrementButton')

decrementButton.onclick = function() {
  currentNumber --
  currentNumberWrapper.innerHTML = currentNumber
}