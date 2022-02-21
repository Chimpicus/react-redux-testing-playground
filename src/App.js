import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h1>Count {counter}</h1>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <button onClick={() => dispatch(increment(2))}>+</button>
    </div>
  );
}

export default App; 