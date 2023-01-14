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
    </div>
  );
};

export default Navbar;
