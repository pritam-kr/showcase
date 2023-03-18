import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navigation sm-rounded nav common_padding">
      <div className="nav-left logo">
        <h2 className="nav-logo">Pritam Kumar</h2>
      </div>

      <div className="nav-right">
        <ul className="type-buttet text-lg unordered-list nav_link_wrapper">
          <li>Projects</li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
