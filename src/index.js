import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Navbar from "./Navbar";
import ExplainUseEffect from "./ExplainUseEffect";
import ExplainUseMemo from "./ExplainUseMemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/use-effect" element={<ExplainUseEffect />} />
      <Route path="/use-memo" element={<ExplainUseMemo />} />
    </Routes>
  </BrowserRouter>
);
