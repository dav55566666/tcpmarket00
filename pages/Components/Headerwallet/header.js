import React from 'react';
import Nav from './Nav/nav';
import BItValue from '../../../public/icons/valueBit.svg';
import SlackDown from '../../../public/icons/slackDown.png';
import Person from '../../../public/icons/person.svg';

class Headerwallet extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <section className="first-header">
          {' '}
          <div className="header-section header-sectionwallet">
            <a href="/" className="logo-page">
              <img src="/icons/logo.svg"/>
            </a>
            <a className="backa">
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.45997 0.340908L1.27461 3.52557C0.885241 3.91687 0.666656 4.44643 0.666656 4.99846C0.666656 5.55048 0.885241 6.08004 1.27461 6.47134L4.45927 9.656C4.52333 9.72233 4.59996 9.77523 4.68468 9.81162C4.7694 9.84802 4.86053 9.86718 4.95273 9.86798C5.04494 9.86878 5.13638 9.85121 5.22173 9.81629C5.30707 9.78138 5.3846 9.72981 5.4498 9.66461C5.51501 9.59941 5.56657 9.52187 5.60149 9.43653C5.6364 9.35119 5.65397 9.25974 5.65317 9.16754C5.65237 9.07533 5.63321 8.98421 5.59682 8.89949C5.56043 8.81476 5.50752 8.73814 5.4412 8.67408L2.46139 5.69289H16.6389C16.8231 5.69289 16.9997 5.61972 17.1299 5.48949C17.2602 5.35926 17.3333 5.18263 17.3333 4.99846C17.3333 4.81428 17.2602 4.63765 17.1299 4.50742C16.9997 4.37719 16.8231 4.30402 16.6389 4.30402H2.4607L5.44189 1.32283C5.50822 1.25877 5.56112 1.18215 5.59751 1.09742C5.63391 1.0127 5.65307 0.921577 5.65387 0.829371C5.65467 0.737165 5.6371 0.645723 5.60218 0.56038C5.56726 0.475037 5.5157 0.397502 5.4505 0.3323C5.3853 0.267098 5.30776 0.215535 5.22242 0.180618C5.13708 0.145701 5.04563 0.128131 4.95343 0.128932C4.86122 0.129734 4.7701 0.14889 4.68538 0.185285C4.60065 0.221679 4.52403 0.274583 4.45997 0.340908Z" fill="#F3F6FB"/>
                </svg>
                Назад
            </a>
            <div className="header-navs-menu">
              <div className="bit-credit">
                <div className="bit-blocks">
                  <div className="bit-logo">
                    <img src={BItValue} />
                  </div>
                  <div className="bit-text">
                    <small>TCP Credit</small>{' '}
                    <small className="small-price">0.00001</small>
                  </div>
                  <img src={SlackDown} />
                </div>
                <div className="bit-blocks">
                  <div className="bit-logo">
                    <img src={BItValue} />
                  </div>
                  <div className="bit-text">
                    <small>TCP Credit</small>{' '}
                    <small className="small-price">0.00001</small>
                  </div>
                  <img src={SlackDown} />
                </div>
                <div className="bit-blocks">
                  <div className="bit-logo">
                    <img src={BItValue} />
                  </div>
                  <div className="bit-text">
                    <small>TCP Credit</small>{' '}
                    <small className="small-price">0.00001</small>
                  </div>
                  <img src={SlackDown} />
                </div>
              </div>

              <Nav />
              <div className="person">
                <img src={Person} alt={'Person'} />
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Headerwallet;
