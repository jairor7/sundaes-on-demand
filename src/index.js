import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store/store";
import "./style/styles.scss";
import { SundaesOnDemand } from "./SundaesOnDemand";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SundaesOnDemand />
    </Provider>
  </React.StrictMode>
);
