import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

const RouteUrl = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
          <Route index element={<FirstPage />} />
          <Route path="/about" element={<SecondPage />} />
      </Routes>
    </div>
  );
};

export default RouteUrl;
