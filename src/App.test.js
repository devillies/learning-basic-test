import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("render an image from uri", () => {
  const app = document.createElement("div");
  ReactDOM.render(<App />, app);
  // ReactDOM.unmountComponentAtNode(div);
});
