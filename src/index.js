import React from "react";
import { render } from "react-dom";

function Hello() {
  return <h2>Hello, the world</h2>
}         

render(<Hello />, document.getElementById("app"));