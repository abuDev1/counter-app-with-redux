import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const reducer = (state = 0, action) => {
  if (action.type === "plus") {
    return state + 1;
  }
  if (action.type === "minus") {
    return state - 1;
  }
  if (action.type === "reset") {
    return 0;
  }
  return state;
};

const store = createStore(reducer);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
