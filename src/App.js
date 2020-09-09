import React, { useState } from 'react'
import Calculator from './components/Calculator'
import './App.css';

function App() {
  const [input, setInput] = useState("")
  const [operand, setOperand] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState("")
  return (
    <div className="app">
      <Calculator
        input={input}
        setInput={setInput}
        operand={operand}
        setOperand={setOperand}
        operation={operation}
        setOperation={setOperation}
        result={result}
        setResult={setResult} />
    </div>
  )
}

export default App;