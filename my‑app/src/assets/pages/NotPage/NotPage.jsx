import React from "react";
import { Link } from "react-router-dom";
import "./NotPage.scss";

export default () => {
  return (
    <div className="page-notfound">
      <p className="page-title">
        Oops! We can't find the page youre looking for
      </p>
      <p className="page-desc">
        You tried to request a page that doesn't exist. Return to{" "}
        <Link to="/">Home page</Link>.
      </p>
    </div>
  );
};
