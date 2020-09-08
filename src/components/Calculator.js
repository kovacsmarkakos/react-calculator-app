import React from 'react';

const Calculator = ({ input, setInput, operand, setOperand, operation, setOperation }) => {
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
      <div class="output">
        <h1>{input}</h1>
      </div>
      <button >AC</button>
      <button className="span-two">DEL</button>
      <button onClick={operationHandler} value="/" >/</button>
      <button onClick={inputHandler} value="7" >7</button>
      <button onClick={inputHandler} value="8" >8</button>
      <button onClick={inputHandler} value="9" >9</button>
      <button onClick={operationHandler} value="*" >x</button>
      <button onClick={inputHandler} value="4" >4</button>
      <button onClick={inputHandler} value="5" >5</button>
      <button onClick={inputHandler} value="6" >6</button>
      <button onClick={operationHandler} value="-" >-</button>
      <button onClick={inputHandler} value="1" >1</button>
      <button onClick={inputHandler} value="2" >2</button>
      <button onClick={inputHandler} value="3" >3</button>
      <button onClick={operationHandler} value="+" >+</button>
      <button className="span-three" onClick={inputHandler} value="0" >0</button>
      <button id="equal" onClick={calculate} >=</button>
    </div>
  )
}

export default Calculator