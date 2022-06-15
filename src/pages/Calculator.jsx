import { useState } from "react";
import "../assets/styles/calculator.scss";

let activeOperator = null;
const calculatorNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const calculatorFunctions = ["CE", "="];
const calculatorOperators = [
  { name: "+", operation: (a) => (b) => a + b },
  { name: "-", operation: (a) => (b) => a - b },
  { name: "*", operation: (a) => (b) => a * b },
  { name: "/", operation: (a) => (b) => a / b },
];

const Calculator = () => {
  const [displayNumber, setDisplayNumber] = useState("0");

  const handleNumberClick = (e) => {
    if (displayNumber === "0") {
      setDisplayNumber(e.target.name);
      return;
    }

    setDisplayNumber(displayNumber + e.target.name);
  };

  const handleOperatorClick = (operation) => {
    activeOperator = operation(parseFloat(displayNumber));
    setDisplayNumber("0");
  };

  const handleFunctionClick = (e) => {
    const operations = {
      CE: () => {
        setDisplayNumber("0");
        activeOperator = null;
      },
      "=": () => {
        setDisplayNumber(activeOperator(parseFloat(displayNumber)).toString());
      },
    };

    operations[e.target.name]();
  };
  return (
    <div className="calculatorAppFrame">
      <div className="calculatorApp">
        <input
          type="text"
          className="calculatorDisplay"
          readOnly
          value={displayNumber}
        />
        {calculatorNumbers.map((number) => (
          <button
            type="button"
            key={number}
            name={number}
            className="calculatorButtonNumber"
            onClick={handleNumberClick}
          >
            {number}
          </button>
        ))}
        {calculatorOperators.map((operator) => (
          <button
            type="button"
            key={operator.name}
            name={operator.name}
            className="calculatorButtonOperator"
            onClick={() => handleOperatorClick(operator.operation)}
          >
            {operator.name}
          </button>
        ))}
        {calculatorFunctions.map((functionName) => (
          <button
            type="button"
            key={functionName}
            name={functionName}
            className="calculatorButtonFunction"
            onClick={handleFunctionClick}
            disabled={functionName === "=" && activeOperator === null}
          >
            {functionName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
