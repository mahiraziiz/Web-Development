import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(5);
  // let counter = 5;
  const addValue = () => {
    // counter = counter + 1;
    // setcounter(counter);
    if (counter < 20) {
      setcounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter >= 1) {
      setcounter(counter - 1);
    }
  };
  return (
    <>
      <h1>chai or react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
