import React, { useState } from "react";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const nums = [
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "/",
    "0",
    ".",
  ];

  const createNumBtns = nums.map((num) => (
    <CalcBtn key={num} num={num} onClick={() => updateCalc(num)} />
  ));

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    // if (!ops.includes(value)) {
    //   setResult(eval(calc + value).toString());
    // }
  };

  const calculate = () => {
    if (calc !== "") {
      setCalc(eval(calc).toString());
    }
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  };
  const reset = () => {
    setCalc("");
    setResult("");
  };

  const calcWidth = "w-80 md:w-96 ";

  return (
    <div className={`${calcWidth}  rounded text-red-400  bg-neutral-900`}>
      <h1 className="p-2 text-center text-3xl border-b border-red-400">
        Calculator
      </h1>
      <div className="px-5 flex justify-end border-b border-red-400">
        {result || 0}
      </div>
      <div className="p-5 pb-0 text-right text-3xl">{calc || 0}</div>

      <CalcBtnGroup>
        {createNumBtns}
        <CalcBtn num="=" onClick={calculate} />
      </CalcBtnGroup>
      <div className="flex justify-between ">
        <Button name="DEL" onClick={deleteLast} />
        <Button name="Reset" onClick={reset} />
      </div>
    </div>
  );
};

const CalcBtnGroup = ({ children }) => {
  return (
    <div className="grid grid-cols-4 border-t border-b border-red-400 ">
      {children}
    </div>
  );
};

const CalcBtn = ({ num, onClick }) => {
  return (
    <div className="flex-1 px-2 py-2 justify-center flex items-center  font-semibold">
      <div
        onClick={onClick}
        className="rounded-full h-10 w-10 flex items-center justify-center shadow-lg border-2 border-red-400 active:bg-red-400 active:bg-opacity-10  cursor-pointer "
      >
        {num}
      </div>
    </div>
  );
};

const Button = ({ name, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 m-4 font-semibold text-xl border border-red-400 active:bg-red-400 active:bg-opacity-10`}
    >
      {name}
    </button>
  );
};

export default Calculator;
