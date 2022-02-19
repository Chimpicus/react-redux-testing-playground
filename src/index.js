import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

//ACTION --> GIVES INSTRUCTION TO REDUCER
const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

//REDUCER --> UPDATES STATE BASED ON INSTRUCTIONS FROM ACTION
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;
  }
};

//STORE --> GLOBALIZED STATE
let store = createStore(counter);

//DISPLAY IN CONSOLE
//eslint-disable-next-line
store.subscribe(() => console.log(store.getState()));

//DISPATCH --> GIVES THE ACTION TO REDUCER
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
