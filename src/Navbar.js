import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/use-effect"} style={{ textDecoration: "none" }}>
        <h3>useEffect</h3>
      </Link>
      <Link to={"/use-memo"} style={{ textDecoration: "none" }}>
        <h3>useMemo</h3>
      </Link>
      <Link to={"/use-ref"} style={{ textDecoration: "none" }}>
        <h3>useRef</h3>
      </Link>
      <Link to={"/use-context"} style={{ textDecoration: "none" }}>
        <h3>useContext</h3>
      </Link>
      <Link to={"/use-context-practice"} style={{ textDecoration: "none" }}>
        <h3>useContextPractice</h3>
      </Link>
      <Link to={"/use-callback"} style={{ textDecoration: "none" }}>
        <h3>useCallback</h3>
      </Link>{" "}
      <Link to={"/use-transition"} style={{ textDecoration: "none" }}>
        <h3>useTransition</h3>
      </Link>{" "}
      <Link to={"/use-deferred-value"} style={{ textDecoration: "none" }}>
        <h3>useDeferredValue</h3>
      </Link>{" "}
      <Link to={"/use-state"} style={{ textDecoration: "none" }}>
        <h3>useState</h3>
      </Link>{" "}
      <Link to={"/use-reducer-basic"} style={{ textDecoration: "none" }}>
        <h3>useReducerBasic</h3>
      </Link>
      <Link to={"/use-reducer-complex"} style={{ textDecoration: "none" }}>
        <h3>useReducerComplex</h3>
      </Link>
      <Link to={"/portal-modal"} style={{ textDecoration: "none" }}>
        <h3>Portal Modal</h3>
      </Link>
      {/* <Link to={"/use-custom-hook"} style={{ textDecoration: "none" }}>
        <h3>Custom Hooks</h3>
      </Link> */}
    </div>
  );
};

export default Navbar;
