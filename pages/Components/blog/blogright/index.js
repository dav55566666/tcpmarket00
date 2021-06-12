import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const Blogright = ({children}) => {
    return (
      <div className="blog-cont-flex-right">
        <h4>Сортировка <span>по дате публикации</span></h4>
        <div className="blog-cont-flex-right-int">
          {children}
        </div>
      </div>
    );
}
export default Blogright;
