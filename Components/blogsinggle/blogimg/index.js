import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const Blogsingleimg = ({firstimg}) => {
    return (
      <div className="blogsingle-cont-flex-statyaimg">
        <img src={firstimg} />
      </div>
    );
}
export default Blogsingleimg;
