// seleciona o formulário todo
const form = document.getElementById('task-form')
// seleciona o input do formulário
const inputField = document.getElementById('task-input')
// seleciona a div onde a tarefa será inserida
const taskList = document.getElementById('tasks')

// função para adicionar o texto na lista ao clique do botão
form.onsubmit = function(event) {
  // não atualizar a página ao clique do botão
  event.preventDefault()
  // seleciona apenas o valor do input
  const description = inputField.value.trim()
  // chamada da função para adicionar a tarefa
  addTask(description)
  // chamada para resetar o campo do formulário
  form.reset()
}

// função para adicionar tarefa
function addTask(description) {
  const div = document.createElement('div')
  const textSpan = document.createElement('span')
  
  textSpan.innerText = description
  
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox');

  div.append(checkbox)
  div.append(textSpan)
  taskList.append(div)
}

