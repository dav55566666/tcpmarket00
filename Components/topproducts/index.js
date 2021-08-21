import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
const TopProduct = ({ children }) => {
    return (
        <div className="topproduct">
            <div className="topproduct-cont">
              <div className="topproduct-cont-title">
                <p> Популярные
                  <span>товары и услуги</span>
                  <img src="/icons/cascas.svg" />
                </p>
              </div>
              <div className="topproduct-cont-flex">
                {children}
              </div>
            </div>
        </div>
    );
}
export default TopProduct;
