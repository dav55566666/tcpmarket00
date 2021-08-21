import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const Product = ({children}) => {
    return (
        <div className="your_product">
            <div className="your_product-cont" id="jsselector">
              {children}
            </div>
        </div>
    );
}
export default Product;
