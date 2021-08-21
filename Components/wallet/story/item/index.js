import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const StoryItem = ({ imgpath, imgpath2, type, price,totalpricered, smooth, plus, minus, totalprice, centralspan, centralp }) => {
    return (
      <div className="cryptowallets-box-item">
        <div className="cryptowallets-box-item-left">
          <div className="cryptowallets-box-item-left-img">
            <img src={imgpath} />
          </div>
          <div className="cryptowallets-box-item-left-text">
            <p className="storitype">{type}</p>
            <div className="cryptowallets-box-item-left-text-bottom">
              <p className="storyprice">{price}</p>
              <span className="smooth">{smooth}</span>
              <span className="plus">{plus}</span>
              <span className="minus">{minus}</span>
            </div>
          </div>
        </div>
        <p className="centralp">{centralp}<span>{centralspan}</span></p>
        <div className="cryptowallets-box-item-right cryptowallets-box-item-right2">
          <div className="cryptowallets-box-item-right-text">
            <p className="green">{totalprice}</p>
            <p className="red">{totalpricered}</p>
            <div className="cryptowallets-box-item-right-text-img">
              <img src={imgpath2} />
              <img src="/icons/fi-sr-exclamation.png" />
            </div>
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
export default StoryItem;
