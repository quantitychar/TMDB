import React from "react";
import PropTypes from "prop-types";
import Container from "../../layout/Container/Container";
import { Link } from "react-router-dom";
//fun
import IconLogo from "./icons/logo.svg?react";
import IconFavorite from "./icons/favorite.svg?react";
import "./Header.scss";

const Header = ({ count }) => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <div className="header__logo">
            <Link to="/" className="logo">
              <IconLogo />
            </Link>
          </div>
          <div className="header__actions">
            <Link to="/favorite" className="header__favorites-list">
              Список обраних
              <span className="icon-favorite">
                <span className="count">{count}</span>
                <IconFavorite />
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  count: PropTypes.number,
};

export default Header;
