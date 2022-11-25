import React from "react";
import { CalculatorButton } from "../../components/CalculatorButton";
import { CalculatorButtonTypeEnum } from "../../components/CalculatorButton";

export const Calculator = () => {
  return (<div>
    <div>
      <p></p>
    </div>
    <div>
      {["C", "+/-", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, "."].map((num: number | string) => {
        return <CalculatorButton value={num} type={CalculatorButtonTypeEnum.normal} />
      })}
      <CalculatorButton value="=" type={CalculatorButtonTypeEnum.wide} />
    </div>
  </div>);
};
