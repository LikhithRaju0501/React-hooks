import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/use-effect"} style={{ textDecoration: "none" }}>
        <h3>useEffect</h3>
      </Link>
    </div>
  );
};

export default Navbar;
