import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <BrowserRouter>
      <Provider store={store}>
      <App/>
      </Provider>
  </BrowserRouter>
  </StrictMode>,
);
