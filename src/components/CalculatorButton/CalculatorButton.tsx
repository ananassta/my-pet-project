import React from "react";
import { useDispatch } from "react-redux";
import { changeNum } from "../../features/calculator/calculatorSlice";

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
  return <button onClick={() => dispatch(changeNum(Number(value) || 0))}>{value}</button>;
};
