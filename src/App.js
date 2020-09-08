import React, { useState } from 'react'
import Calculator from './components/Calculator'
import './App.css';

function App() {
  const [input, setInput] = useState("")
  const [operand, setOperand] = useState("")
  const [operation, setOperation] = useState("")
  return (
    <div className="app">
      <Calculator
        input={input}
        setInput={setInput}
        operand={operand}
        setOperand={setOperand}
        operation={operation}
        setOperation={setOperation} />
    </div>
  )
}

export default App;
