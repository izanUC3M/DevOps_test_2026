import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("")

  const clickBoton = (valor) => {
    if (valor === "=") {
      try { setDisplay(eval(display).toString()) } 
      catch { setDisplay("Error") }
    } else if (valor === "C") {
      setDisplay("")
    } else {
      setDisplay(display + valor)
    }
  }

  return (
    <div className="calculator">
      <div className="screen">{display || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map(btn => (
          <button key={btn} onClick={() => clickBoton(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  )
}

export default App