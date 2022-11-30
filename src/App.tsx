import React from "react";
import "./App.css";
import { Calculator } from "./pages/Calculator/Calculator";
import { store } from "./app/store";
import { Provider } from "react-redux";

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Calculator />
        </header>
      </div>
    </Provider>
  );
}
