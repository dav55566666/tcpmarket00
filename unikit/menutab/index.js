import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const Menutab = ({menuaddclass, children}) => {
    return (
      <div className={"menutab "+ menuaddclass}>
        {children}
      </div>
    );
}
export default Menutab;
