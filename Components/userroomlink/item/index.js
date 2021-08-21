import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
const UserRoomLink = ({linkimg, linkname, linkhref }) => {
    return (
      <a href={linkhref}>
        <img src={linkimg} />
        {linkname}</a>
    );
}
export default UserRoomLink;
