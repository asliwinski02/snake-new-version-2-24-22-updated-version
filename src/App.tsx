import "./styles.css";
import Snake from "./Snake";
// import Snake from "./Snake.ts";
import display from "./display";
import { useEffect } from "react";

export default function App() {
  // Add Snake Tests with display below
  display(
    "snake is moving",
    firstSnake.position,
    "squares,",
    "and snake is turning",
    firstSnake.direction,
    "squares"
  );
  display(
    "snake is moving",
    secondSnake.position,
    "squares,",
    "and snake is turning",
    secondSnake.direction,
    "squares"
  );
  
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    display("hey");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <pre id="output">
        OUTPUT: <br />
      </pre>
    </div>
  );
}

