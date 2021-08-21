import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";

const ProductItem = ({imgpath,productname,procuctcod,procuctstat,zakaz,price1,price2}) => {
    return (
        <div className="your_product-cont-item">
          <div className="your_product-cont-item-left">
            <div className="your_product-cont-item-left-img">
              <span>V</span>
              <img src={imgpath} />
            </div>
            <div className="your_product-cont-item-left-text">
              <h4>{productname}</h4>
              <div className="text-flex">
                <div className="text-flex-left">
                  <div className="text-flex-leftp">
                    <p>Код товара:<span>{procuctcod}</span></p>
                    <p>В наличии: {procuctstat}</p>
                  </div>
                  <div className="your_product-cont-item-left-text-btn">
                    <a><img src="/icons/fi-sr-stats.svg" />Рекламировать</a>
                    <a><img src="/icons/fi-sr-box-alt.svg" />Посмотреть заказы ({zakaz} новых)</a>
                  </div>
                </div>
                <div className="your_product-cont-item-irgth">
                  <button>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <p>{price1}</p>
                  <p>{price2}</p>
                  <div className="your_product-cont-item-left-text-btn-type2">
                    <a><img src="/icons/fi-sr-stats.svg" /></a>
                    <a><img src="/icons/fi-sr-box-alt.svg" />{zakaz}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}
export default ProductItem;
