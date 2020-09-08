import React from 'react';

const Input = ({ input, setInput, operand, setOperand, operation, setOperation }) => {
  const inputHandler = (e) => {
    setInput(appendNumber(e.target.value))
  }

  const appendNumber = (number) => {
    return input + number
  }

  const operationHandler = (e) => {
    setOperation(e.target.value)
    setOperand(input)
    setInput("")
  }

  const calculate = () => {
    let computation
    const prev = parseFloat(input)
    const current = parseFloat(operand)
    if (isNaN(prev) || isNaN(current)) return
    switch (operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = current - prev
        break
      case '*':
        computation = prev * current
        break
      case '/':
        computation = current / prev
        break
      default:
        return
    }
    console.log(computation)
  }

  return (
    <div className="button-container">
      <button className="button">C</button>
      <button className="button">+-</button>
      <button className="button">%</button>
      <button onClick={operationHandler} value="/" className="button">/</button>
      <button onClick={inputHandler} value="7" className="button">7</button>
      <button onClick={inputHandler} value="8" className="button">8</button>
      <button onClick={inputHandler} value="9" className="button">9</button>
      <button onClick={operationHandler} value="*" className="button">x</button>
      <button onClick={inputHandler} value="4" className="button">4</button>
      <button onClick={inputHandler} value="5" className="button">5</button>
      <button onClick={inputHandler} value="6" className="button">6</button>
      <button onClick={operationHandler} value="-" className="button">-</button>
      <button onClick={inputHandler} value="1" className="button">1</button>
      <button onClick={inputHandler} value="2" className="button">2</button>
      <button onClick={inputHandler} value="3" className="button">3</button>
      <button onClick={operationHandler} value="+" className="button">+</button>
      <button onClick={inputHandler} value="0" className="button">0</button>
      <button className="button">.</button>
      <button className="button">.</button>
      <button onClick={calculate} className="button">=</button>
    </div>
  )
}

export default Input