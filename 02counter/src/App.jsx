import { useState } from "react";

import "./App.css";

function App() {
  //normally counter wont change on screen because counter is not a state variable
  // to ab
  const [counter, setCounter] = useState(0);
  // counter is just a variable here and setCounter is function to update the state variable counter
  const addVal = () => {
    setCounter(counter + 1);
  };
  const remVal = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>react course</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addVal}>add value</button>
      <button onClick={remVal}>remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
