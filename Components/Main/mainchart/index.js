import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const Mainchart = ({ children }) => {
    return (
        <div className="mainchart">
          {children}
        </div>
    );
}
export default Mainchart;
