import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const element1 = 'Digital Innovation'
const element2 = <h1>Natallia Bonadia</h1>

function App() {
  return (
    <div className='Aplicativo'>
      {element1}
      {element2}
    </div>
  ) 
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
