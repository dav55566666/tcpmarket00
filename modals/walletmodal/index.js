import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import { Select, Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import InputNum from "../../unikit/inpnumber"
const { Option } = Select;
import Button from "../../unikit/button"

function clouswalletmodal() {
 document.getElementById('walletmodal').style.display = "none";
}

function openbuy(e) {
  var classremove = document.getElementsByClassName('selectmodalppage')
  document.getElementById('buy').style.display = "block";
  document.getElementById('give').style.display = "none";
  document.getElementById('obmen').style.display = "none";
  for(var i = 0; i<classremove.length; i++){
    classremove[i].classList.remove("activ")
    console.log(i)
  }
  e.target.classList.toggle('activ')
}
function opengive(e) {
  var classremove = document.getElementsByClassName('selectmodalppage')
  document.getElementById('buy').style.display = "none";
  document.getElementById('give').style.display = "block";
  document.getElementById('obmen').style.display = "none";
  for(var i = 0; i<classremove.length; i++){
    classremove[i].classList.remove("activ")
    console.log(i)
  }
  e.target.classList.toggle('activ')
}
function openobmen(e) {
  var classremove = document.getElementsByClassName('selectmodalppage')
  document.getElementById('buy').style.display = "none";
  document.getElementById('give').style.display = "none";
  document.getElementById('obmen').style.display = "block";
  for(var i = 0; i<classremove.length; i++){
    classremove[i].classList.remove("activ")
    console.log(i)
  }
  e.target.classList.toggle('activ')
}
const menu = (
  <Menu>
    <Menu.Item danger><p>TCP Cent </p></Menu.Item>
    <Menu.Item danger><p>TCP Cent </p></Menu.Item>
    <Menu.Item danger><p>TCP Cent </p></Menu.Item>
    <Menu.Item danger><p>TCP Cent </p></Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu>
    <Menu.Item danger><p>0.0000000000 </p></Menu.Item>
    <Menu.Item danger><p>0.0000000000 </p></Menu.Item>
    <Menu.Item danger><p>0.0000000000 </p></Menu.Item>
    <Menu.Item danger><p>0.0000000000 </p></Menu.Item>
  </Menu>
);
const Walletmodal = () => {
    return (
        <div className="walletmodal" id="walletmodal">
            <div className="walletmodal-cont">
              <button onClick={clouswalletmodal} className="clousmodal"></button>
              <div className="walletmodal-cont-buttons">
                <button onClick={openbuy} className="selectmodalppage" > <img className="img" src="/icons/icon (9).svg" /> Покупка  </button>
                <button onClick={opengive} className="selectmodalppage" > <img className="img" src="/icons/receive bit.svg" /> Получить </button>
                <button onClick={openobmen} className="selectmodalppage" > <img className="img" src="/icons/fi-sr-refresh bit.svg" /> Обменять  </button>
                <button> <img className="img" src="/icons/fi-sr-bank.svg" /> Торговать </button>
              </div>
              <div className="walletmodal-cont-buybitcoin" id="buy">
                <h2>Купить Bitcoin</h2>
                <div className="walletmodal-cont-buybitcoin-btn">
                  <p>Метод оплаты</p>
                  <div className="walletmodal-cont-buybitcoin-btn-flex">
                    <button className="activ">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.9103 11.0594H11.5796L12.3449 12.802H14.6022L15.9103 11.0594ZM18.0001 7.78906H10.1439L10.9092 9.53174H16.6934L18.0001 7.78906Z" fill="#73C8EB"/>
                        <path d="M10.1231 3L4.02295 16.3348H6.34553L10.1201 7.73415L13.9006 16.3482H16.2247L10.1231 3Z" fill="#73C8EB"/>
                        <path d="M2 7.78906L3.27697 9.53174H10.9092L10.1439 7.78906H2ZM4.32258 11.0594L5.60104 12.802H12.3448L11.5795 11.0594H4.32258Z" fill="#73C8EB"/>
                      </svg>
                      AdvCash кошелек
                    </button>
                    <button>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8611 3.75H5.13891C3.19446 3.75 1.66669 5.27778 1.66669 7.22222H18.3334C18.3334 5.27778 16.8056 3.75 14.8611 3.75Z" fill="#73C8EB"/>
                        <path d="M1.66669 12.776C1.66669 14.7205 3.19446 16.2483 5.13891 16.2483H14.8611C16.8056 16.2483 18.3334 14.7205 18.3334 12.776V8.60938H1.66669V12.776ZM6.5278 12.4288C6.5278 12.9844 6.04169 13.4705 5.48613 13.4705C4.93058 13.4705 4.44446 12.9844 4.44446 12.4288C4.44446 11.8733 4.93058 11.3872 5.48613 11.3872C6.04169 11.3872 6.5278 11.8733 6.5278 12.4288Z" fill="#73C8EB"/>
                      </svg>
                       банковская карта
                     </button>
                  </div>
                </div>
                <div className="walletmodal-cont-buybitcoin-form">
                  <form>
                    <div className="walletmodal-cont-buybitcoin-form-select">
                      <p>Вы отдаете</p>
                      <label>
                        <input type="text" placeholder="Сумма пополнения" />
                        <Select
                          showSearch
                          placeholder="USD"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          <Option value="USD">USD</Option>
                          <Option value="USD">USD</Option>
                          <Option value="USD">USD</Option>
                        </Select>
                      </label>
                    </div>
                    <p className="itogp">Вы получаете:<span>≈ 0.000 <img className="img" src="/icons/fi-sr-exclamation.svg" /></span></p>
                    <div className="walletmodal-cont-buybitcoin-form-btn">
                      <input type="submit" value="Инструкция" />
                      <input type="submit" value="Купить BTC" />
                    </div>
                  </form>
                </div>

              </div>
              <div className="walletmodal-cont-givebitcoin" id="give">
                <h2>Получить Bitcoin</h2>
                <div className="walletmodal-cont-givebitcoin-btn">
                  <div className="walletmodal-cont-givebitcoin-btn-item">
                    <img className="img" src="icons/Wallet.svg" />
                    <p>Внешний источник<span>Получить средства с внешних кошельков или бирж</span></p>
                  </div>
                  <div className="walletmodal-cont-givebitcoin-btn-item">
                    <img className="img" src="icons/fi-sr-user1.svg" />
                    <p>Внутрений перевод<span>Получить средства с аккаунта других пользователей.</span></p>
                  </div>
                </div>
                <div className="walletmodal-cont-givebitcoin-send">
                  <div className="walletmodal-cont-givebitcoin-send-title">
                    <p>Отправьте Bitcoin</p>
                    <img className="img" src="/icons/fi-sr-exclamation.svg" />
                  </div>
                  <div className="walletmodal-cont-givebitcoin-send-input">
                    <p>0x025c7B7E6309F62D2d99C6431E7073fA626f67B1
                    <a><img className="img" src="/icons/fi-sr-copy.svg" /></a></p>
                    <a><img className="walletmodal-cont-givebitcoin-send-input-icon" src="/icons/icon (10).svg" /></a>
                  </div>
                </div>
                <div className="walletmodal-cont-givebitcoin-submit">
                  <button>Получить BTC</button>
                </div>
              </div>
              <div className="walletmodal-cont-buybitcoin walletmodal-cont-obmenbitcoin" id="obmen">
                <h2>Обменять Bitcoin</h2>
                <div className="walletmodal-cont-obmenbitcoin-select">
                  <div className="walletmodal-cont-obmenbitcoin-select-item">
                    <p>На что обменять</p>
                    <Dropdown overlay={menu}>
                      <div className="selectdrop">
                        <div className="selectdrop-left">
                          <img className="img" src="/icons/value.svg" />
                          <p>TCP Cent </p>
                        </div>
                        <img className="img" src="/icons/fi-sr-angle-small-right.svg" />
                      </div>
                    </Dropdown>
                  </div>
                  <div className="walletmodal-cont-obmenbitcoin-select-item">
                    <p>На что обменять</p>
                    <Dropdown overlay={menu2}>
                      <div className="selectdrop">
                        <div className="selectdrop-left">
                          <p>0.0000000000 </p>
                        </div>
                        <img className="img" src="/icons/fi-sr-angle-small-right.svg" />
                      </div>
                    </Dropdown>
                    <span>Доступно: 0.0000233459 BTC</span>
                  </div>
                </div>
                <div className="walletmodal-cont-buybitcoin-form">
                  <form>
                    <p className="itogp">Комиссия:<span> 0.00000003 TCP Cent  <img className="img" src="/icons/fi-sr-exclamation.svg" /></span></p>
                    <p className="itogp">Вы получите:<span> 0.00000000 TCP Cent</span></p>
                    <p className="itogp">Ознакомиться с<a>условиями обмена</a></p>
                    <div className="walletmodal-cont-buybitcoin-form-btn">
                      <input type="submit" value="Обменять" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="walletmodal-cont-buybitcoin walletmodal-cont-torg" id="torg">
                <h2>Торговать Bitcoin</h2>
                <button className="opentypemodal">Bitcoin/TCP Cent<img src="/icons/fi-sr-refresh.svg"/></button>
                <div className="walletmodal-cont-torg-btn">
                  <p>Вы хотите</p>
                  <div className="walletmodal-cont-torg-btn-flex">
                    <a><img src="/icons/receive.svg" />Купить</a>
                    <a><img src="/icons/sell.svg" />Продать</a>
                  </div>
                </div>
                <form>
                  <div className="walletmodal-cont-torg-order">
                    <p>Ордер</p>
                    <label>
                      <input type="text" placeholder="Лимитный "/>
                      <img src="/icons/fi-sr-exclamation.svg" />
                    </label>
                  </div>
                  <div className="walletmodal-cont-torgflex">
                    <InputNum yourclass={"torg_counter"} textp={"Сумма в Bitcoin"} inpvalu={"0"} />
                    <InputNum yourclass={"torg_counter"} textp={"Цена в TCP Cent"} inpvalu={"0.00068964"} />
                    <InputNum yourclass={"torg_counter"} textp={"Всего в TCP Cent"} inpvalu={"0"} />
                    <div className="inputnumber torg_counter2">
                      <p>Комиссия</p>
                      <div className="counter">
                        <span id="counttext">0.0003 </span>
                        <a className="btn">TCP Cent</a>
                      </div>
                    </div>
                  </div>
                  <Button colorclass={"pink noimg torgsend"} text="Купить BTC" />
                </form>
              </div>
            </div>
        </div>
    );
}
export default Walletmodal;
