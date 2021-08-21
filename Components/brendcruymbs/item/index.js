import React from 'react';
import PropTypes from 'prop-types';
import Next from "../../../public/icons/arrovnext.svg"


const BrendcrumbsItem = ({ nexttext, children }) => {
    return (
        <a>
          {nexttext}
          <img src={Next} />
        </a>
    );
}
export default BrendcrumbsItem;
