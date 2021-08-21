import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, {
  Navigation,Pagination
} from 'swiper/core';
SwiperCore.use([Navigation,Pagination]);
const CharityHome = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="charityhome">
          <div className="charityhome-cont">
            <h1>Благотворительность</h1>
            <div className="charityhome-cont-flex">
              <div className="charityhome-cont-left">
                <div className="charityhome-cont-left-item">
                  <p>383</p>
                  <span>Просьб о помощи услышаны</span>
                </div>
                <div className="charityhome-cont-left-item">
                  <p>1 000 000 $</p>
                  <span>Уже собрано нуждающимся</span>
                </div>
                <div className="charityhome-cont-left-item">
                  <p>200 000 $</p>
                  <span>Еще нужно собрать </span>
                </div>
              </div>
              <div className="charityhome-cont-slide">
                <div className="btn">
                  <button className="prevslide"></button>
                  <button className="nextslide"></button>
                </div>
                <Swiper pagination={true,{clickable: true}} spaceBetween={10} navigation={{prevEl: ".prevslide", nextEl: ".nextslide"}} loop={true} className="mySwiper2">
                  <SwiperSlide>
                    <img src="/icons/photo.png" />
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/icons/photo.png" />
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/icons/photo.png" />
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/icons/photo.png" />
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/icons/photo.png" />
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/icons/photo.png" />
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/icons/photo.png" />
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
    );
}
export default CharityHome;
