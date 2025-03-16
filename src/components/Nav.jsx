import React from "react";
import { Link } from "react-router-dom";

// Define navigation items in an array
const navLinks = [
  { path: "/html", label: "HTML" },
  { path: "/css", label: "CSS" },
  { path: "/javascript", label: "JavaScript" },
  { path: "/react", label: "React" },
  { path: "/sanity", label: "Sanity" },
];

function Nav() {
  return (
    <nav>
      <ul className="tabs">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
