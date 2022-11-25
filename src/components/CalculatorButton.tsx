import React from "react";

export enum CalculatorButtonTypeEnum {
  normal,
  wide,
}

type CalculatorButtonType = {
  value: number | string;
  type: CalculatorButtonTypeEnum;
};

export const CalculatorButton = ({ value, type }: CalculatorButtonType) => {
  return <div>{value}</div>;
};
