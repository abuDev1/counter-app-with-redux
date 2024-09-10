import React from "react";

export const Buttons = ({ plus, minus, reset }) => {
  return (
    <div className="buttons">
      <button className="blue_btn" onClick={plus}>
        Увеличить
      </button>
      <button className="orange_btn" onClick={minus}>
        Уменьшить
      </button>
      <button className="grey_btn" onClick={reset}>
        Сброс
      </button>
    </div>
  );
};
