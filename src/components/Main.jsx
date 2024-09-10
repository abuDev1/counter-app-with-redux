import React, { useState } from "react";
import { Number } from "./Number";
import { Buttons } from "./Buttons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Main = () => {
  // let counter = 0;

  // Переменные состояния

  // const [counter, setCounter] = useState(0);

  // const plus = () => {
  //   setCounter(counter + 3);
  // };

  // const minus = () => {
  //   if (counter > 1) {
  //     setCounter(counter - 2);
  //   } else if (counter === 1) {
  //     setCounter(counter - 1);
  //   }
  // };

  // const reset = () => {
  //   setCounter(0);
  // };

  ////////

  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  const plus = () => {
    dispatch({
      type: "plus",
    });
  };

  const minus = () => {
    dispatch({
      type: "minus",
    });
  };

  const reset = () => {
    dispatch({
      type: "reset",
    });
  };

  return (
    <main className="main">
      <Number count={counter} />
      <Buttons plus={plus} minus={minus} reset={reset} />
    </main>
  );
};
