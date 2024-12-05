import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Progress from "./Progress";
import reportWebVitals from "./reportWebVitals";
import Example2 from "./Example2";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";
import RouteUrl from "./RouteUrl";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteUrl />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
