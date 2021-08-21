import React, { useState, useEffect } from 'react';
import Arcat from '../../../public/icons/arcat.svg';
import Slider from "react-slick";

class CenterSection extends React.Component {
  state = {};
  render() {
    const settingsMain = {
      dots: true,
      infinite: true,
      speed: 500
    };
    return (
      <div className="big-center-section">
        <Slider {...settingsMain}>
          <section className="center-section">
            <div className="center-title">
              <h2>НОВЫЕ ТОВАРЫ</h2>
              <h2>Ювелирные украшения</h2>
              <p>
                Чистое серебро, золото 585 пробы, <br></br> а также бижутерия
              </p>
              <a href="#">
                <button className="go-catalog">Перейти в каталог</button>
              </a>
            </div>
            <div className="img-center">
              <img src={Arcat} alt={'Arcat'} />
            </div>
          </section>
          <section className="center-section">
            <div className="center-title">
              <h2>НОВЫЕ ТОВАРЫ</h2>
              <h2>Ювелирные украшения</h2>
              <p>
                Чистое серебро, золото 585 пробы, <br></br> а также бижутерия
              </p>
              <a href="#">
                <button className="go-catalog">Перейти в каталог</button>
              </a>
            </div>
            <div className="img-center">
              <img src={Arcat} alt={'Arcat'} />
            </div>
          </section>
          <section className="center-section">
            <div className="center-title">
              <h2>НОВЫЕ ТОВАРЫ</h2>
              <h2>Ювелирные украшения</h2>
              <p>
                Чистое серебро, золото 585 пробы, <br></br> а также бижутерия
              </p>
              <a href="#">
                <button className="go-catalog">Перейти в каталог</button>
              </a>
            </div>
            <div className="img-center">
              <img src={Arcat} alt={'Arcat'} />
            </div>
          </section>
          <section className="center-section">
            <div className="center-title">
              <h2>НОВЫЕ ТОВАРЫ</h2>
              <h2>Ювелирные украшения</h2>
              <p>
                Чистое серебро, золото 585 пробы, <br></br> а также бижутерия
              </p>
              <a href="#">
                <button className="go-catalog">Перейти в каталог</button>
              </a>
            </div>
            <div className="img-center">
              <img src={Arcat} alt={'Arcat'} />
            </div>
          </section>
          <section className="center-section">
            <div className="center-title">
              <h2>НОВЫЕ ТОВАРЫ</h2>
              <h2>Ювелирные украшения</h2>
              <p>
                Чистое серебро, золото 585 пробы, <br></br> а также бижутерия
              </p>
              <a href="#">
                <button className="go-catalog">Перейти в каталог</button>
              </a>
            </div>
            <div className="img-center">
              <img src={Arcat} alt={'Arcat'} />
            </div>
          </section>
          <section className="center-section">
            <div className="center-title">
              <h2>НОВЫЕ ТОВАРЫ</h2>
              <h2>Ювелирные украшения</h2>
              <p>
                Чистое серебро, золото 585 пробы, <br></br> а также бижутерия
              </p>
              <a href="#">
                <button className="go-catalog">Перейти в каталог</button>
              </a>
            </div>
            <div className="img-center">
              <img src={Arcat} alt={'Arcat'} />
            </div>
          </section>
        </Slider>
      </div>
    );
  }
}

export default CenterSection;
