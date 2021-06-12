  import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';
SwiperCore.use([Navigation,Thumbs]);
const menu = (
  <Menu>
    <Menu.Item>
    <div className="charity-cont-right-wallet-flex-valyut">
      <p>
        <img src="/icons/Vector (12).svg" />
        Bitcoin
      </p>
      <span>
        0.000000003
        <img src="/icons/Vecasdjghtor.svg" />
      </span>
    </div>
    </Menu.Item>
  </Menu>
);
function slidetext(e){
  var text = document.getElementById('opistext')
  if(text.style.height!=="120px"){
    text.style.height="120px";
    // console.log("as")
  }else{
    text.style.height="auto";
    console.log("as")
  }
}
function slideclick (){
  var slide = document.getElementById('chartslid')
  document.getElementById('openslide').style.display="none";
  slide.className += " activ_slide";
}
function removslideclick (){
  var slide = document.getElementById('chartslid')
  document.getElementById('openslide').style.display="block";
  slide.classList.remove("activ_slide");
}
const Charity = ({priceTop, opis, donation, donationtotal, collected, collectedtotal,valyut,valyutprice  }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (

        <div className="charity">
            <div className="charity-cont">
              <div className="charity-cont-slide" id="chartslid">
                <div className="charity-cont-slide-top">
                  <a onClick={slideclick} id="openslide"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 5.59V1C18 0.45 17.55 0 17 0H12.41C11.52 0 11.07 1.08 11.7 1.71L13.29 3.3L3.29 13.3L1.7 11.71C1.08 11.08 0 11.52 0 12.41V17C0 17.55 0.45 18 1 18H5.59C6.48 18 6.93 16.92 6.3 16.29L4.71 14.7L14.71 4.7L16.3 6.29C16.92 6.92 18 6.48 18 5.59Z" fill="#D7E1EB"/>
                    </svg>
                  </a>
                  <Swiper spaceBetween={0} slidesPerView={'auto'} navigation={{prevEl: ".prevslide", nextEl: ".nextslide"}}  thumbs={{ swiper: thumbsSwiper }} loop={false} className="mySwiper2">
                    <button onClick={removslideclick} className="clousactivslide"><svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.365528" y1="0.658841" x2="14.3655" y2="15.6588" stroke="#D7E1EB"/>
                    <line x1="14.3763" y1="0.329252" x2="0.376288" y2="16.3293" stroke="#D7E1EB"/>
                    </svg>
                    </button>
                    <SwiperSlide>
                      <img src="/icons/picture.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/icons/pict.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/icons/pict (1).png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/icons/pict.png" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="bottom-slide">
                  <button className="prevslide"></button>
                  <Swiper onSwiper={setThumbsSwiper} spaceBetween={16} navigation={{prevEl: ".prevslide", nextEl: ".nextslide"}} loop={true} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper">
                    <SwiperSlide>
                      <img src="/icons/picture.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/icons/pict.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/icons/pict (1).png" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="/icons/pict.png" />
                    </SwiperSlide>
                  </Swiper>
                  <button className="nextslide"></button>
                </div>
              </div>
              <div className="charity-cont-right">
                <h4>Гордому оленю нужны деньги на лечение</h4>
                <p className="pricetop">Нужно собрать: <span>{priceTop}</span></p>
                <p className="opistitle">Описание</p>
                <p className="opistext" id="opistext">{opis}<a onClick={slidetext}>Развернуть полностью</a></p>
                <div className="charity-cont-right-collected">
                  <div className="charity-cont-right-collected-item">
                    <p>{collected}</p>
                    <span>{collectedtotal}</span>
                    <div className="charity-cont-right-collected-item-range">
                      <span></span>
                    </div>
                  </div>
                  <div className="charity-cont-right-collected-item">
                    <p>{donation}</p>
                    <span>{donationtotal}</span>
                  </div>
                </div>
                <div className="charity-cont-right-wallet">
                  <p>Кошелек</p>
                  <div className="charity-cont-right-wallet-flex">
                    <Dropdown overlay={menu} >
                      <div className="charity-cont-right-wallet-flex-valyut">
                        <p>
                          <img src="/icons/Vector (12).svg" />
                          {valyut}
                        </p>
                        <span>
                          {valyutprice}
                          <img src="/icons/Vecasdjghtor.svg" />
                        </span>
                      </div>
                    </Dropdown>
                    <label><input type="text" placeholder="Сумма пожертвования" /></label>
                  </div>
                  <button><img src="/icons/Vecascastor.svg" />Пожертвовать</button>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Charity;
