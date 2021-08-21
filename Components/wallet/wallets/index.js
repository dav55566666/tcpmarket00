import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const Wallets = ({ children, title }) => {
    return (
      <div className="wallet-cont-info-wallets">
        <h2>{title}</h2>
        <div className="wallet-cont-info-wallets-flex">
          {children}
        </div>
      </div>
    );
}
export default Wallets;
