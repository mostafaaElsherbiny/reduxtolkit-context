import React, { useState } from "react";
import ClassContextComponent from "./components/ClassContextComponent";
import FunctionContextComponent from "./components/FunctionContextComponent";
import { ThemeProvider } from "./context/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { increment, decrement } from "./counterSlice";

function App() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}
export default App;
