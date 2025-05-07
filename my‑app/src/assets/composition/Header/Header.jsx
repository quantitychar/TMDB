import React from "react";
import PropTypes from "prop-types";
import Container from "../../layout/Container/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
//fun
import IconLogo from "./icons/logo.svg?react";
import IconFavorite from "./icons/favorite.svg?react";
import ArrowIcon from "./icons/left-arrow.svg?react";
import "./Header.scss";

const Header = ({ count }) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <div className="header__logo">
            {!isHomePage && (
              <span className="btn-back" onClick={handleBack}>
                <ArrowIcon />
              </span>
            )}
            <Link to="/" className="logo">
              <IconLogo />
            </Link>
          </div>
          <div className="header__actions">
            <Link to="/user/info" className="header__item">
              User
            </Link>
            <Link
              to="/user/favorite"
              className="header__item header__favorites-list"
            >
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
