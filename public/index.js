import React from "react";
import ReactDOM from "react-dom/client";
import InfoPage from "./infoPage.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      {/* <Page /> */}
    </Provider>
  </React.StrictMode>
);
