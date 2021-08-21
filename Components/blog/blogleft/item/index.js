import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const BlogleftItem = ({intimg, inttitle, inttext, intdata}) => {
    return (
      <div className="blog-cont-flex-left-int-item">
        <img src={intimg} />
        <div className="boxtext">
          <h5>{inttitle}</h5>
          <p>{inttext}</p>
          <div className="blog-cont-flex-left-int-item-bottom">
            <a>Читать</a>
            <span>{intdata}</span>
          </div>
        </div>
      </div>
    );
}
export default BlogleftItem;
