import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import H4 from "../../../../unikit/abzac/h4"
import Button from "../../../../unikit/button"

const Mainchartitem = ({textabzac, imgpath, textbutton }) => {
    return (
        <div className="mainchart_item">
          <H4 abzac={textabzac} />
          <img src={imgpath} />
          <Button text={textbutton} colorclass={"violet noimg"}/>
        </div>
    );
}
export default Mainchartitem;
