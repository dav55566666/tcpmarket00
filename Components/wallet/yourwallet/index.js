import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const Yourwallet = ({ title, imgpath, yourwalletname }) => {
    return (
      <div className="wallet-cont-info-left-yourwallet">
        <h2>{title}</h2>
        <div className="wallet-cont-info-left-yourwallet-box">
          <div className="wallet-cont-info-left-yourwallet-box-img">
            <img src={imgpath} />
          </div>
          <div className="wallet-cont-info-left-yourwallet-box-text">
            <h4>{yourwalletname}</h4>
            <div className="wallet-cont-info-left-yourwallet-box-text-flex">
              <a>QR Код <img src="/icons/qr.svg" /></a>
              <a>Копировать <img src="/icons/icon.svg" /></a>
              <a>Поделиться <img src="/icons/share.svg" /></a>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Yourwallet;
