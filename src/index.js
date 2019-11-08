import React from "react";
import { render } from "react-dom";
// import { BrowsetRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";         

function Hello() {                                         
  return <h2 className="container">Hello, the world</h2>            
}                                      
                            
render(<Hello />, document.getElementById("app"));