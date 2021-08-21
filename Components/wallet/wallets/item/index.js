import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const WalletsItem = ({ walletsname }) => {
    return (
      <a>{walletsname}</a>
    );
}
export default WalletsItem;
