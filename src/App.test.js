import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("render an image from uri", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
