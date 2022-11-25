import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CalculatorButton } from "../../components/CalculatorButton/CalculatorButton";
import { CalculatorButtonTypeEnum } from "../../components/CalculatorButton/CalculatorButton";

export const Calculator = () => {
  const buttons = ["C", "+/-", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, "."];
  const currNum = useSelector((state: RootState)=>state.calculator.currValue);
  return (<div>
    <div>
      <p>{currNum}</p>
    </div>
    <div>
      {buttons.map((num: number | string, key: number) => {
        return <CalculatorButton value={num} type={CalculatorButtonTypeEnum.normal} key={key}/>
      })}
      <CalculatorButton value="=" type={CalculatorButtonTypeEnum.wide} />
    </div>
  </div>);
};
