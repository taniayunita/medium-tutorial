import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../component/sidebar";
import "./LeftSidebar.style.scss";

const LayoutLeftSidebar = ({ children }) => {
  //   const { menus } = props;

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Carousel",
      path: "/carousel",
    },
    {
      name: "Coba",
      path: "/coba",
    },
  ];
  return (
    <div className="container-layout">
      <Sidebar menus={menus} />
      <div className="right-content">
        {/* <div className="header">Header</div> */}
        <div className="main-content">{children}</div>
        {/* <div className="footer">Footer</div> */}
      </div>
    </div>
  );
};

export default LayoutLeftSidebar;
