import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("render an image from uri", () => {
  const div = document.createElement("div");
  const header = document.createElement("header");
  const image = document.createElement("image");
  header.appendChild(image);
  div.appendChild(header);

  ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
