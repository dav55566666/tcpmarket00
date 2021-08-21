import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
const UserRoomLink = ({ children }) => {
    return (
      <div className="wallet-cont-links">
        <div className="wallet-cont-links-box">
          {children}
        </div>
      </div>
    );
}
export default UserRoomLink;
