import React from "react";
import "./Button.style.scss";

// Custom button element where we add values as props

const Button = ({ link, name, clickButton, addClassName, ...otherProps }) => {
  return (
    <a href={link}>
      <button onClick={clickButton} className={addClassName} {...otherProps}>
        {name}
      </button>
    </a>
  );
};

export default Button;
