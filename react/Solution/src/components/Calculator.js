import React, { useState } from 'react';

const Calculator = () => {
  const [operation, setOperation] = useState('+');
  const [calculation, setCalculation] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [error, setError] = useState('');

  const calculate = () => {
    if (num1 === '' || num2 === '') {
      return setError('Select Two Numbers');
    }

    let total;

    switch(operation) {
      case '+':
        total = num1 + num2;
        break;
      case '-':
        total = num1 - num2;
        break;
      case 'x':
        total = num1 * num2;
        break;
      case '/':
        total = num1 / num2;
        break;
      default: 
        total = num1 + num2;
    }
    setError('');
    setCalculation(total);
  };

  const handleInput = e => {
    e.preventDefault();
    let num = parseInt(e.target.value);
    (e.target.id === 'num1') ? setNum1(num) : setNum2(num);
  };

  const handleClear = () => {
    setOperation('+');
    setCalculation('');
    setNum1('');
    setNum2('');
    setError('');
  };

  return (
    <div className="calculator">

      <div data-testid="name">Calculator</div>
      
      <div data-testid="display" className="display">{calculation}</div>

      <div className="number-inputs">
        <input data-testid="num1" id="num1" type="number" onChange={handleInput} value={num1}></input>
        <div data-testid="selected-operation">{operation}</div>
        <input data-testid="num2" id="num2" type="number" onChange={handleInput} value={num2}></input>
      </div>

      <div className="operation-selectors">
        <button data-testid="add" onClick={() => setOperation('+')}>+</button>
        <button data-testid="sub" onClick={() => setOperation('-')}>-</button>
        <button data-testid="mul" onClick={() => setOperation('x')}>x</button>
        <button data-testid="div" onClick={() => setOperation('/')}>/</button>
      </div>

      <div className="options">
        <button data-testid="clear" className="clear" onClick={() => handleClear()}>Clear</button>
        <button data-testid="calc" onClick={() => calculate()}>Calculate</button>
      </div>

      <div data-testid="error" id="error" className="error">{error}</div>

    </div>
  )
}

export default Calculator;