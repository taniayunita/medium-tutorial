import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.style.scss";

import LogoReact from "../../assets/react.svg";

const Sidebar = (props) => {
  const { menus } = props;

  const [active, setActive] = useState(0);
  return (
    <div className="sidebar">
      <div className="header-sidebar">
        <div className="logo flex">
          <img src={LogoReact} alt="" />
          <div>
            <p className="font-bold">Tutorial</p>
            <p className="font-bold">Component</p>
          </div>
        </div>
      </div>

      <ul className="menu-sidebar">
        {menus.map((menu, index) => (
          <Link to={menu.path} key={index}>
            <li
              className={`menu-item ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              {menu.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
