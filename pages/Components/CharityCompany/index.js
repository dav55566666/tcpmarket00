import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
const CharityCompany = ({children}) => {
    return (
        <div className="charitycompany">
            <div className="charitycompany-cont">
              <h2>Похожие</h2>
              <div className="charitycompany-cont-flex">
                {children}
              </div>
            </div>
        </div>
    );
}
export default CharityCompany;
