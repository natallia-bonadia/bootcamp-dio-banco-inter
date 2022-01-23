import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './Components/Button.jsx'
import { ComponentA } from './Components/ComponentA.jsx'
import { ComponentB } from './Components/ComponentB.jsx'
import './styles.css'

function soma(a, b) {
  alert(a + b)
}

function App() {

  return (
    <div>
      <Button onClick = {() => soma(10,20)} name = 'Soma 10 + 20' />
      <ComponentA>
        <ComponentB>
          <Button onClick = {() => soma(20,30)} name = 'Soma 20 + 30' />
        </ComponentB>
      </ComponentA>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
