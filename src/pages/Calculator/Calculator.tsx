import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CalculatorButton } from "../../components/CalculatorButton/CalculatorButton";
import { CalculatorButtonTypeEnum } from "../../components/CalculatorButton/CalculatorButton";
import styles from "./Calculator.module.css";

export const buttons = ["C", "+/-", "%", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", "", 0, "."];

export const Calculator = () => {
  const currNum = useSelector((state: RootState) => state.calculator.currValue);

  return (<div className={styles.calculator}>
    <p className={styles.calculatorTitle}>Calculator</p>
    <div id="calculatorNumberField" className={styles.calculatorNumberField}>
      <p>{currNum}</p>
    </div>
    <div className={styles.calculatorButtonsField}>
      {buttons.map((num: number | string, key: number) => {
        return <CalculatorButton value={num} type={CalculatorButtonTypeEnum.normal} key={key}/>
      })}
      <CalculatorButton value="=" type={CalculatorButtonTypeEnum.wide} />
    </div>
  </div>);
};
