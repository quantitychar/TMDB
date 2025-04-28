import React from "react";
import "./Container.scss";

const Container = ({ children }) => {
  return <div className="g-container">{children}</div>;
};

export default Container;
