import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const CryptowalletsItem = ({ imgpath, type, price, smooth, plus, minus, totalprice, aboutprice }) => {
    return (
      <div className="cryptowallets-box-item">
        <div className="cryptowallets-box-item-left">
          <div className="cryptowallets-box-item-left-img">
            <img src={imgpath} />
          </div>
          <div className="cryptowallets-box-item-left-text">
            <p>{type}</p>
            <div className="cryptowallets-box-item-left-text-bottom">
              <p>{price}</p>
              <span className="smooth">{smooth}</span>
              <span className="plus">{plus}</span>
              <span className="minus">{minus}</span>
            </div>
          </div>
        </div>
        <div className="cryptowallets-box-item-right">
          <div className="cryptowallets-box-item-right-text">
            <p>{totalprice}</p>
            <span>{aboutprice}</span>
          </div>
          <button>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    );
}
export default CryptowalletsItem;
