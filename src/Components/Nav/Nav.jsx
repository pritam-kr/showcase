import React from "react";
import "./Nav.css";
import * as FaIcons from "react-icons/fa";

const Nav = () => {
  return (
    <div className="navigation sm-rounded nav common_padding">
      <div className="nav-left logo">
        <h2 className="nav-logo">Pritam Kumar</h2>
      </div>

      <div className="nav-right">
        <button
          className="btn btn-primary btn_link"
          style={{ color: "#fff" }}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1HmcMPmlfXbJ73A_Ie3Iu-BLyIMPvKS2Q/view?usp=sharing",
              "_blank"
            )
          }
        >
          <FaIcons.FaRegNewspaper />
          Resume
        </button>
        {/* <ul className="type-buttet text-lg unordered-list nav_link_wrapper">
          <li>Projects</li>
          <li>Blogs</li>
        </ul> */}
      </div>
    </div>
  );
};

export default Nav;
