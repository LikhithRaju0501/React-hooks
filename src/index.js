import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Navbar from "./Navbar";
import ExplainUseEffect from "./ExplainUseEffect";
import ExplainUseMemo from "./ExplainUseMemo";
import ExplainUseRef from "./ExplainUseRef";
import MainState from "./ExplainUseContext.js/MainState";
import ExplainUseCallback from "./ExplainUseCallback/ExplainUseCallback";
import ExplainUseTransition from "./ExplainUseTransition";
import ExplainUseDeferredValue from "./ExplainUseDeferredValue/ExplainUseDeferredValue";
import ExplainUseState from "./ExplainUseState";
import PracticeUseContext from "./ExplainUseContext.js/Practice";
import ExplainUseReducerBasic from "./ExplainUseReducer/ExplainUseReducerBasic";
import ExplainUserReducerComplex from "./ExplainUseReducer/ExplainUserReducerComplex";
// import ExplainUseCustomHooks from "./ExplainUseCustomHooks/ExplainUseCustomHooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/use-effect" element={<ExplainUseEffect />} />
      <Route path="/use-memo" element={<ExplainUseMemo />} />
      <Route path="/use-ref" element={<ExplainUseRef />} />
      <Route path="/use-context" element={<MainState />} />
      <Route path="/use-context-practice" element={<PracticeUseContext />} />
      <Route path="/use-callback" element={<ExplainUseCallback />} />
      <Route path="/use-transition" element={<ExplainUseTransition />} />
      <Route path="/use-deferred-value" element={<ExplainUseDeferredValue />} />
      <Route path="/use-state" element={<ExplainUseState />} />
      <Route path="/use-reducer-basic" element={<ExplainUseReducerBasic />} />
      <Route
        path="/use-reducer-complex"
        element={<ExplainUserReducerComplex />}
      />
      <Route path="*" element={<App />} />
      {/* <Route path="/use-custom-hook" element={<ExplainUseCustomHooks />} /> */}
    </Routes>
  </BrowserRouter>
);
