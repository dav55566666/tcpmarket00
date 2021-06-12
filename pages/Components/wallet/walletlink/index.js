import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
const WalletLink = ({ children }) => {
    return (
      <div className="wallet-cont-links">
        <div className="wallet-cont-links-box">
          {children}
        </div>
      </div>
    );
}
export default WalletLink;
