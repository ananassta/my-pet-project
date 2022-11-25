import React from "react";
import { useDispatch } from "react-redux";
import { changeNum, countNum } from "../../features/calculator/calculatorSlice";
import styles from "./CalculatorButton.module.css";

export enum CalculatorButtonTypeEnum {
  normal,
  wide,
}

type CalculatorButtonType = {
  value: number | string;
  type: CalculatorButtonTypeEnum;
};

export const CalculatorButton = ({ value, type }: CalculatorButtonType) => {
  const dispatch = useDispatch();
  function calculate(value) {
    if (isNaN(value)) {
      dispatch(countNum(value));
    } else {
      dispatch(changeNum(Number(value) || 0));
    }
  }
  return (
    <button
      className={styles.calculatorButton}
      onClick={() => calculate(value)}
      disabled={value === ""}
    >
      {value}
    </button>
  );
};
