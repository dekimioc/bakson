import React from "react";
import "./Footer.style.scss";

const Footer = ({ text, link }) => {
  return (
    <div className="footerContainer">
      <p>
        powered by{" "}
        <span>
          <a href={link}>{text}</a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
