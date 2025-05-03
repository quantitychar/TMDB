import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
  const {
    onClick,
    type = "button",
    className,
    href,
    to,
    children,
    isOutline,
    ...restProps
  } = props;

  let Element = href ? "a" : "button";

  if (to) {
    Element = Link;
  }

  return (
    <Element
      type={(!href || !to) && type}
      className={cn("button", className, { outline: isOutline })}
      onClick={onClick}
      href={href}
      to={to}
      {...restProps}
    >
      {children}
    </Element>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.any,
  isOutline: PropTypes.bool,
  restProps: PropTypes.object,
};

export default Button;
