import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const MenutabItem = ({menutablink, menuimg, menutext}) => {
    return (
      <div className="menutab_item">
        <a href={menutablink}>
          <img src={menuimg}/>
          <span>{menutext}</span>
        </a>
      </div>
    );
}
export default MenutabItem;
