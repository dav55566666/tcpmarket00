import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const Cryptowallets = ({ children, title }) => {
    return (
      <div className="wallet-cont-info-left-cryptowallets">
        <h2>{title}</h2>
        <div className="wallet-cont-info-left-cryptowallets-box">
          {children}
        </div>
      </div>
    );
}
export default Cryptowallets;
