import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import Button from "../../unikit/button"
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';
SwiperCore.use([Navigation,Thumbs]);
const Product = ({ price, productname }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="product">
            <div className="product-cont">
              <div className="product-cont-slide">
                <div className="product-cont-slide-top">
                  <div className="product-cont-slide-top-left">
                    <a>
                      <img src="/icons/save.svg" />
                    </a>
                    <a>
                      <img src="/icons/check.svg" />
                    </a>
                  </div>
                  <a>
                    <img src="/icons/Vector (11).svg" />
                  </a>
                </div>
                <Swiper spaceBetween={10} navigation={{prevEl: ".prevslide", nextEl: ".nextslide"}}  thumbs={{ swiper: thumbsSwiper }} loop={true} className="mySwiper2">
                  <SwiperSlide>
                    <img src="/icons/image44.png" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/icons/image 45.png" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/icons/image 45 (1).png" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/icons/image 46.png" />
                  </SwiperSlide>
                </Swiper>
                <div className="bottom-slide">
                  <button className="prevslide"></button>
                  <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} navigation={{prevEl: ".prevslide", nextEl: ".nextslide"}} loop={true} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper">
                    <SwiperSlide>
                      <img src="/icons/image44.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/icons/image 45.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/icons/image 45 (1).png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/icons/image 46.png" />
                    </SwiperSlide>
                  </Swiper>
                  <button className="nextslide"></button>
                </div>
              </div>
              <div className="product-cont-central">
                <h3>{productname}</h3>
                <div className="product-cont-central-otziv">
                  <div className="starts">
                    <img src="icons/star.svg" />
                    <img src="icons/star.svg" />
                    <img src="icons/star.svg" />
                    <img src="icons/star.svg" />
                    <img src="icons/star.svg" />
                    <span>3.6</span>
                  </div>
                  <p>188 отызывов о товаре</p>
                </div>
                <div className="product-cont-central-price">
                  <p>US ${price}</p>
                  <p>128 TCP Credit</p>
                </div>
                <p className="product-info-text">Огромное описание товара в много строчек по этому этот текст я буду повторять. Огромное описание товара в много строчек по этому этот текст я буду повторять. Огромное описание товара в много строчек по этому этот текст я буду повторять. Огромное описание товара в много строчек по этому этот текст я буду повторять. <a>Развернуть полностью</a></p>
                <div className="product-cont-central-color">
                  <p>Цвет</p>
                  <div className="product-cont-central-color-flex">
                    <label>
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span></span>
                    </label>
                  </div>
                </div>
                <div className="product-cont-central-type">
                  <p>Комплектация</p>
                  <div className="product-cont-central-type-flex">
                    <label>
                      <input type="checkbox" />
                      <span>Intel core i7</span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span>Intel core i5</span>
                    </label>
                    <label>
                      <input type="checkbox" />
                      <span>Intel core i3</span>
                    </label>
                  </div>
                </div>
                <a className="showdock">
                  <img src="/icons/google-docs 1.svg" />
                  Ознакомится с документами?
                </a>
                <div className="product-cont-central-buttons">
                  <Button text={"Купить сейчас"} colorclass={"pink"} imgsrc={"/icons/asdascas.svg"} />
                  <Button text={"В корзинус"} colorclass={"blue"} imgsrc={"/icons/cart (1).svg"} />
                  <a>
                    <img src="/icons/save.svg" />
                  </a>
                  <a>
                    <img src="/icons/check.svg" />
                  </a>
                </div>
                <div className="product-cont-central-bottom">
                  <a>
                    <img src="/icons/barcode-scanner 1.svg" />
                    QR Код товара
                  </a>
                  <a>
                    <img src="/icons/fi-sr-share.svg" />
                    В корзину
                  </a>
                </div>
              </div>
              <div className="product-cont-right">
                <div className="product-cont-right-top">
                  <div className="product-cont-right-top-user">
                    <img src="/icons/user photo.png" />
                    <div className="product-cont-right-top-user-text">
                      <p>Название магазина</p>
                      <div className="starts">
                        <img src="/icons/star.svg" />
                        <img src="/icons/star.svg" />
                        <img src="/icons/star.svg" />
                        <img src="/icons/star.svg" />
                        <img src="/icons/star.svg" />
                        <span>3.6</span>
                      </div>
                    </div>
                  </div>
                  <Button text={"Написать продавцу"} colorclass={"blue noimg"} />
                  <a> Витрина магазина
                    <img src="/icons/eva_external-link-outline.svg" />
                  </a>
                </div>
                <div className="product-cont-right-bottom">
                  <iframe src="https://yandex.ru/map-widget/v1/-/CCUaIZb0HB"></iframe>
                  <div className="product-cont-right-bottom-text">
                    <p>Россия,  г. Москва, Таганская улица,  дом 2 корпус 3 может быть в 3 строки</p>
                    <Button text={"Построить маршрут"} colorclass={"violet noimg"} />
                    <a> Показать на карте
                      <img src="/icons/eva_external-link-outline.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Product;
