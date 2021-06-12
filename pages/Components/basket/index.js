import React from 'react';
import PropTypes from 'prop-types';


const Basket = ({children }) => {
    return (
        <div className="basket">
            <div className="basket-cont">
              <div className="basket-cont-left">
                <div className="basket-cont-left-title">
                  <h1>Корзина</h1>
                  <button>
                    <img src="/icons/titlebajetbtn.svg" />
                    Удалить все
                  </button>
                </div>
                <div className="basket-cont-left-box">
                  {children}
                </div>
              </div>
              <div className="basket-cont-right">
                <div className="basket-cont-right-top">
                  <h4>Счет</h4>
                  <p>Стоимость:<span>USD 320,00</span></p>
                  <p>В TCP Credit:<span>24,00000000</span></p>
                  <p className="itog">Итого:<span>USD 320,00</span></p>
                </div>
                <div className="basket-cont-right-bottom">
                  <a href="oform">Оформить заказ</a>
                  <a>Купить в кредит</a>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Basket;
