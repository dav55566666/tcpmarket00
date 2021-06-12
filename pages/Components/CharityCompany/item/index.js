import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
const CharityCompanyItem = ({imgpath, needtocollect, titlecompany, collectedprice }) => {
    return (
        <div className="charitycompany-cont-flex-item">
          <img src={imgpath} />
          <h4>{titlecompany}</h4>
          <p className="needtocollect">Нужно собрать:<span>{needtocollect}</span></p>
          <p className="collectedprice">Собрано:<span>{collectedprice}</span></p>
          <div className="btn">
            <a href="charity">Подробнее</a>
          </div>
        </div>
    );
}
export default CharityCompanyItem;
