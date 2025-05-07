import React from "react";
import PropTypes from "prop-types";

import "./UserInfo.scss";

const UserInfo = ({ favorite = [] }) => {
  return (
    <div className="user-info">
      <p className="info-item">User Name</p>
      <p className="info-item">User email</p>
      <p className="info-item">User NickName</p>
      <p className="info-item">Favorite: {favorite.length}</p>
    </div>
  );
};

UserInfo.propTypes = {
  favorite: PropTypes.array,
};

export default UserInfo;
