import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import Container from "../../layout/Container/Container";

import "./UserPage.scss";

const UserPage = () => {
  const { pathname } = useLocation();

  return (
    <div className="g-page">
      <Container>
        <div className="g-tab">
          <div className="tab-nav">
            <Button
              className="tab-button"
              to="info"
              isActive={pathname === "/user/info"}
            >
              User
            </Button>
            <Button
              className="tab-button"
              to="favorite"
              isActive={pathname === "/user/favorite"}
            >
              Favorite
            </Button>
          </div>
          <div className="tab-content">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserPage;
