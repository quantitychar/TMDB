import React from "react";
import "./Footer.scss";

const Footer = () => {
  const getDateNow = new Date().getFullYear();

  return (
    <footer className="g-footer">
      <div className="copywriting">Footer (c) {getDateNow}</div>
    </footer>
  );
};

export default Footer;
