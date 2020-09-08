import React, { useState } from 'react'
import Input from './components/Input'
import Display from './components/Display'
import './App.css';

function App() {
  const [input, setInput] = useState("")
  const [operand, setOperand] = useState("")
  const [operation, setOperation] = useState("")
  return (
    <div className="app">
      <Display input={input} />
      <Input
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
