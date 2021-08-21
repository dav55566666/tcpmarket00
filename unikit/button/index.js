import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
/*{
class: pink, violet, blue, noimg, fullw
}*/
const Button = ({text, colorclass, imgsrc, link}) => {
    return (
      <a href={link} className={colorclass + " styleguidbtn"}><img src={imgsrc} />{text}</a>
    );
}
export default Button;
