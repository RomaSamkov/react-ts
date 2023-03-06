import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalState } from "./context/ModalContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-ts/">
      <ModalState>
        <App />
      </ModalState>
    </BrowserRouter>
  </React.StrictMode>
);

// basename = "/react-ts/";
