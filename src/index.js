import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ExplainUseEffect from "./ExplainUseEffect";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/use-effect" element={<ExplainUseEffect />} />
    </Routes>
  </BrowserRouter>
);
