import React from "react";
import "./Header.style.scss";

const Header = props => {
  return <div className="headerContainer">{props.children}</div>;
};
export default Header;
