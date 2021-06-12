import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
function showall2(){
  document.getElementById('storijs').style.height="max-content"
}
const Story = ({ children, title }) => {
    return (
      <div className="wallet-cont-info-left-cryptowallets">
        <h2>{title}</h2>
        <div className="wallet-cont-info-left-cryptowallets-box">
          <div className="storijs" id="storijs">
            {children}

          </div>
          <button className="showallbtn" onClick={showall2} >Показать все</button>
        </div>
      </div>
    );
}
export default Story;
