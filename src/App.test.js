import { render, screen } from "@testing-library/react";
import { App } from "./App";
// import { buttons } from "./pages/Calculator/Calculator";

describe("Компонент App", () => {
  it("Рендеринг App", () => {
    render(<App />);
  });
  it("Отображение заголовка Calculator", () => {
    render(<App />);

    expect(screen.queryByText("Calculator")).toBeInTheDocument();
  });
  // buttons.forEach((button) => {
  //   it("Отображение кнопки " + button, () => {
  //     render(<App />);

  //     // expect(screen.queryAllByText(String(button))).toBeInTheDocument();
  //     expect(screen.
  //   });
  // });
});
