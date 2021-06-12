import React from 'react';
import Nav from './Nav/nav';
import BItValue from '../../../public/icons/valueBit.svg';
import SlackDown from '../../../public/icons/slackDown.png';
import HeaderDown from './HeaderDown/headerDown';
import Person from '../../../public/icons/person.svg';

class Header extends React.Component {
  state = {};
  render() {
    return (
      <header>
        <section className="first-header">
          {' '}
          <div className="header-section">
            <a href="/" className="logo-page">
              <img src="/icons/logo.svg"/>
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

        <HeaderDown />
      </header>
    );
  }
}

export default Header;
