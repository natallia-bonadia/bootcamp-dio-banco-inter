var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

const incrementButton = document.getElementById('incrementButton')

incrementButton.onclick = function() {
  currentNumber ++
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber >= 10) {
    incrementButton.disabled = true
  }
  decrementButton.disabled = false    
}

const decrementButton = document.getElementById('decrementButton')

decrementButton.onclick = function() {
  currentNumber --
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber <= 0) {
    decrementButton.disabled = true
  }
  incrementButton.disabled = false
}

