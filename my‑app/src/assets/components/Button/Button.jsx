import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import "./Button.scss";

export default function Button(props) {
  const {
    onClick,
    type = "button",
    className,
    href,
    children,
    to,
    isOutline,
    ...restProps
  } = props;

  const Element = href ? "a" : "button";

  return (
    <Element
      type={href && type}
      className={cn("button", className, { outline: isOutline })}
      onClick={onClick}
      href={href}
      {...restProps}
    >
      {children}
    </Element>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.any,
  isOutline: PropTypes.bool,
  restProps: PropTypes.object,
};
