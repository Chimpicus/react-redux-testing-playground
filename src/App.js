import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, permission } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="app">
      {!isLogged &&
        <button onClick={() => dispatch(permission())}>Log in</button>
      }
      {isLogged &&
        <div className="app">
          <button onClick={() => dispatch(permission())}>Log out</button>
          <h1>Count {counter}</h1>
          <button onClick={() => dispatch(decrement(2))}>-</button>
          <button onClick={() => dispatch(increment(2))}>+</button>
        </div>
      }
    </div>
  );
}

export default App; 