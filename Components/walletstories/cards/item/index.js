import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const CardItem = ({ imgcard, cardtype, cardkod, cardprice }) => {
    return (
      <div className="card-box-item">
        <div className="card-box-item-top">
          <p>{cardtype}</p>
          <button>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <p className="cardkod">{cardkod}</p>
        <div className="card-balance">
          <p>{cardprice}</p>
          <img src={imgcard} />
        </div>
      </div>
    );
}
export default CardItem;
