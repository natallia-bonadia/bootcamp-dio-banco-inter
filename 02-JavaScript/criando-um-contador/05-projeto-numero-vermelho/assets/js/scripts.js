var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

const incrementButton = document.getElementById('incrementButton')

incrementButton.onclick = function() {
  currentNumber ++
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber >= 0) {
    currentNumberWrapper.style.color = '#000'
  }
}

const decrementButton = document.getElementById('decrementButton')

decrementButton.onclick = function() {
  currentNumber --
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber < 0) {
      currentNumberWrapper.style.color = 'red'
  }
}