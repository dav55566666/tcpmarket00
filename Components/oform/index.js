import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import ReactDOM from 'react-dom';
import { Tabs, Menu, Dropdown, Slider } from 'antd';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;

const menu = (
  <Menu>
    <Menu.Item>
      <div className="kashel">
        <p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.69227 1.33203V2.87049H3.64099V13.1269H5.69227V14.6654H6.71791V13.1269H7.74356V14.6654H8.7692V13.1269H9.53843C11.0907 13.1269 12.3589 11.8587 12.3589 10.3064C12.3589 9.2387 11.7641 8.30126 10.8846 7.82229C11.3162 7.44342 11.6221 6.9421 11.7617 6.38506C11.9014 5.82801 11.868 5.24166 11.6662 4.70402C11.4644 4.16638 11.1036 3.70295 10.6319 3.37541C10.1602 3.04787 9.59988 2.87175 9.02561 2.87049H8.7692V1.33203H7.74356V2.87049H6.71791V1.33203H5.69227ZM4.66663 3.89613H9.02561C10.023 3.89613 10.8205 4.69357 10.8205 5.69101C10.8205 6.68844 10.023 7.48588 9.02561 7.48588H4.66663V3.89613ZM4.66663 8.51152H9.53843C10.5359 8.51152 11.3333 9.30895 11.3333 10.3064C11.3333 11.3038 10.5359 12.1013 9.53843 12.1013H4.66663V8.51152Z" fill="#28323C"/>
          </svg>
          Bitcoin
        </p>
        <span>
          0.000000003
        </span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="kashel">
        <p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.69227 1.33203V2.87049H3.64099V13.1269H5.69227V14.6654H6.71791V13.1269H7.74356V14.6654H8.7692V13.1269H9.53843C11.0907 13.1269 12.3589 11.8587 12.3589 10.3064C12.3589 9.2387 11.7641 8.30126 10.8846 7.82229C11.3162 7.44342 11.6221 6.9421 11.7617 6.38506C11.9014 5.82801 11.868 5.24166 11.6662 4.70402C11.4644 4.16638 11.1036 3.70295 10.6319 3.37541C10.1602 3.04787 9.59988 2.87175 9.02561 2.87049H8.7692V1.33203H7.74356V2.87049H6.71791V1.33203H5.69227ZM4.66663 3.89613H9.02561C10.023 3.89613 10.8205 4.69357 10.8205 5.69101C10.8205 6.68844 10.023 7.48588 9.02561 7.48588H4.66663V3.89613ZM4.66663 8.51152H9.53843C10.5359 8.51152 11.3333 9.30895 11.3333 10.3064C11.3333 11.3038 10.5359 12.1013 9.53843 12.1013H4.66663V8.51152Z" fill="#28323C"/>
          </svg>
          Bitcoin
        </p>
        <span>
          0.000000003
        </span>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="kashel">
        <p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.69227 1.33203V2.87049H3.64099V13.1269H5.69227V14.6654H6.71791V13.1269H7.74356V14.6654H8.7692V13.1269H9.53843C11.0907 13.1269 12.3589 11.8587 12.3589 10.3064C12.3589 9.2387 11.7641 8.30126 10.8846 7.82229C11.3162 7.44342 11.6221 6.9421 11.7617 6.38506C11.9014 5.82801 11.868 5.24166 11.6662 4.70402C11.4644 4.16638 11.1036 3.70295 10.6319 3.37541C10.1602 3.04787 9.59988 2.87175 9.02561 2.87049H8.7692V1.33203H7.74356V2.87049H6.71791V1.33203H5.69227ZM4.66663 3.89613H9.02561C10.023 3.89613 10.8205 4.69357 10.8205 5.69101C10.8205 6.68844 10.023 7.48588 9.02561 7.48588H4.66663V3.89613ZM4.66663 8.51152H9.53843C10.5359 8.51152 11.3333 9.30895 11.3333 10.3064C11.3333 11.3038 10.5359 12.1013 9.53843 12.1013H4.66663V8.51152Z" fill="#28323C"/>
          </svg>
          Bitcoin
        </p>
        <span>
          0.000000003
        </span>
      </div>
    </Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu>
    <Menu.Item>
      <div className="kashel">
        <p>
          3PH84Xxa*****ZwZpT8Jzkm
        </p>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="kashel">
        <p>
          3PH84Xxa*****ZwZpT8Jzkm
        </p>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="kashel">
        <p>
          3PH84Xxa*****ZwZpT8Jzkm
        </p>
      </div>
    </Menu.Item>
  </Menu>
);
function adreschek (){
  if(document.getElementById('pochta').checked = true){
    document.getElementById('pochta').checked = false;
    document.getElementById('samo').checked = true;
  }
}
function adreschekq (){
  if(document.getElementById('samo').checked = true){
    document.getElementById('pochta').checked = true;
    document.getElementById('samo').checked = false;
  }
}
function balancechange1 (){
  if(document.getElementById('wallet').checked = true){
    document.getElementById('wallet').checked = false;
    document.getElementById('balance').checked = true;
    document.getElementById('oform-cont-left-sposob-box-dow').style.display="none"
    document.getElementById('oform-cont-left-sposob-box-balance').style.display="block"
  }
}
function balancechange2 (){
  if(document.getElementById('balance').checked = true){
    document.getElementById('balance').checked = false;
    document.getElementById('wallet').checked = true;
    document.getElementById('oform-cont-left-sposob-box-dow').style.display="flex"
    document.getElementById('oform-cont-left-sposob-box-balance').style.display="none"
  }
}
function card1 (){
  if(document.getElementById('ordercard').checked = true){
    document.getElementById('ordercard').checked = false;
    document.getElementById('yourcard').checked = true;
    document.getElementById('oform-cont-left-sposob-box-dow2').style.display="flex"
    document.getElementById('oform-cont-left-sposob-box-paymentcard').style.display="none"
  }
}
function card2 (){
  if(document.getElementById('yourcard').checked = true){
    document.getElementById('yourcard').checked = false;
    document.getElementById('ordercard').checked = true;
    document.getElementById('oform-cont-left-sposob-box-dow2').style.display="none"
    document.getElementById('oform-cont-left-sposob-box-paymentcard').style.display="block"
  }
}
const Oform = () => {
    return (
        <div className="oform">
            <div className="oform-cont">
              <h1>Оформление заказа</h1>
              <div className="oform-cont-flex">
                <div className="oform-cont-left">
                  <div className="oform-cont-left-adres">
                    <p>Доставка</p>
                    <div className="oform-cont-left-adres-box">
                      <form>
                        <div className="oform-cont-left-adres-box-chek">
                          <label onClick={adreschek}><input type="checkbox" id="samo"/><span></span><p>Самовывоз </p><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00002 0.334635C5.68148 0.334635 4.39255 0.725628 3.29622 1.45817C2.19989 2.19071 1.34541 3.2319 0.840827 4.45008C0.336244 5.66825 0.204221 7.0087 0.461456 8.3019C0.718691 9.59511 1.35363 10.783 2.28598 11.7153C3.21833 12.6477 4.40621 13.2826 5.69942 13.5399C6.99263 13.7971 8.33307 13.6651 9.55124 13.1605C10.7694 12.6559 11.8106 11.8014 12.5432 10.7051C13.2757 9.60877 13.6667 8.31984 13.6667 7.0013C13.6648 5.23378 12.9618 3.5392 11.712 2.28937C10.4621 1.03954 8.76754 0.336546 7.00002 0.334635ZM7.55558 10.3346C7.55558 10.482 7.49705 10.6233 7.39286 10.7275C7.28867 10.8317 7.14736 10.8902 7.00002 10.8902C6.85268 10.8902 6.71137 10.8317 6.60719 10.7275C6.503 10.6233 6.44447 10.482 6.44447 10.3346L6.44447 5.89019C6.44447 5.74285 6.503 5.60154 6.60719 5.49735C6.71137 5.39317 6.85268 5.33463 7.00002 5.33463C7.14736 5.33463 7.28867 5.39317 7.39286 5.49735C7.49705 5.60154 7.55558 5.74285 7.55558 5.89019L7.55558 10.3346ZM7.00002 3.66797C6.89014 3.66797 6.78273 3.63538 6.69137 3.57434C6.60001 3.51329 6.5288 3.42653 6.48676 3.32501C6.44471 3.2235 6.43371 3.1118 6.45514 3.00403C6.47658 2.89626 6.52949 2.79727 6.60719 2.71957C6.68488 2.64188 6.78387 2.58897 6.89164 2.56753C6.99941 2.54609 7.11111 2.5571 7.21262 2.59914C7.31414 2.64119 7.4009 2.7124 7.46195 2.80376C7.52299 2.89512 7.55558 3.00253 7.55558 3.11241C7.55558 3.25975 7.49705 3.40106 7.39286 3.50525C7.28867 3.60944 7.14736 3.66797 7.00002 3.66797Z" fill="#FCF0C5"/>
                                  </svg>
                          </label>
                          <div className="oform-cont-left-adres-box-chek-adres"><p>Магазин:  Москва, ул. Земляной Вал, дом 6, корпус 1, квартира 5 </p></div>
                          <label onClick={adreschekq}><input type="checkbox" id="pochta"/><span></span><p>Доставка почтой</p></label>
                        </div>
                        <div className="oform-cont-left-adres-box-text">
                          <label>Страна<input type="text" placeholder="Россия" /></label>
                          <label>Регион<input type="text" placeholder="Москва" /></label>
                          <label>Город<input type="text" placeholder="Россия" /></label>
                          <label>Улица<input type="text" placeholder="Горького" /></label>
                          <label>Дом<input type="text" placeholder="31" /></label>
                          <label>Корпус<input type="text" placeholder="3" /></label>
                          <label>Квартира<input type="text" placeholder="3" /></label>
                          <label>Zip code<input type="text" placeholder="3" /></label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="oform-cont-left-strax">
                    <p className="titlep">Страховка</p>
                    <div className="oform-cont-left-strax-box">
                      <p>Сумма покупки:<span>130,00 $</span></p>
                      <p>% страхования</p>
                      <div className="oform-cont-left-strax-range">
                        <p>5</p>
                        <Slider defaultValue={5} tooltipVisible />
                      </div>
                      <p>Страховая компенсация:<span>6,50 $</span></p>
                    </div>
                  </div>
                  <div className="oform-cont-left-sposob">
                    <p className="titlep">Способ оплаты</p>
                    <Tabs defaultActiveKey="2">
                      <TabPane tab={
                        <div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.8611 3.75H5.13888C3.19443 3.75 1.66666 5.27778 1.66666 7.22222H18.3333C18.3333 5.27778 16.8055 3.75 14.8611 3.75Z" fill="#73C8EB"/>
                          <path d="M1.66666 12.776C1.66666 14.7205 3.19443 16.2483 5.13888 16.2483H14.8611C16.8055 16.2483 18.3333 14.7205 18.3333 12.776V8.60938H1.66666V12.776ZM6.52777 12.4288C6.52777 12.9844 6.04166 13.4705 5.4861 13.4705C4.93055 13.4705 4.44443 12.9844 4.44443 12.4288C4.44443 11.8733 4.93055 11.3872 5.4861 11.3872C6.04166 11.3872 6.52777 11.8733 6.52777 12.4288Z" fill="#73C8EB"/>
                        </svg>
                        <p>Банковская карта</p>
                        </div>} key="1">
                        <div className="oform-cont-left-sposob-box">
                          <p>Ваш баланс:<span>130,00 $ </span></p>
                          <div className="oform-cont-left-sposob-box-chek">
                            <label onClick={card1} ><input type="checkbox" id="yourcard" checked="true" /><span></span><p>С вашей карты  </p><img src='/icons/Vascacstor.png' /></label>
                            <label onClick={card2} ><input type="checkbox" id="ordercard" /><span></span><p>С другой карты </p><img src='/icons/Vascacstor.png' /></label>
                          </div>
                          <div className="oform-cont-left-sposob-box-dow" id="oform-cont-left-sposob-box-dow2">
                            <div className="oform-cont-left-sposob-box-dow-top">
                              <p>Выберите кошелек</p>
                              <Dropdown overlay={menu2}>
                                <div className="oform-cont-left-sposob-box-dow-item">
                                  <p>
                                    3PH84Xxa*****ZwZpT8Jzkm
                                  </p>
                                  <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.96322 4.85758C2.78407 4.67856 2.54115 4.57804 2.28789 4.57813C2.03462 4.57821 1.79177 4.67891 1.61275 4.85806C1.43372 5.0372 1.3332 5.28013 1.33329 5.53339C1.33338 5.78666 1.43408 6.02951 1.61322 6.20853L5.99165 10.586C6.52877 11.123 7.25716 11.4246 8.01665 11.4246C8.77613 11.4246 9.50452 11.123 10.0416 10.586L14.4201 6.20471C14.5844 6.02292 14.6726 5.78489 14.6663 5.53989C14.66 5.29489 14.5598 5.06169 14.3863 4.88858C14.2128 4.71547 13.9794 4.6157 13.7344 4.60992C13.4894 4.60415 13.2515 4.69282 13.0701 4.85758L8.69164 9.236C8.5126 9.41499 8.26981 9.51554 8.01665 9.51554C7.76348 9.51554 7.52069 9.41499 7.34165 9.236L2.96322 4.85758Z" fill="#D7E1EB"/>
                                    </svg>
                                  </span>
                                </div>
                              </Dropdown>
                            </div>
                            <div className="oform-cont-left-sposob-box-dow-top">
                              <p>Выберите валюту оплаты</p>
                              <Dropdown overlay={menu}>
                                <div className="oform-cont-left-sposob-box-dow-item">
                                    <p>
                                      Дебетовая карта
                                    </p>
                                    <span>
                                      180,21 $
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2.96322 4.85758C2.78407 4.67856 2.54115 4.57804 2.28789 4.57813C2.03462 4.57821 1.79177 4.67891 1.61275 4.85806C1.43372 5.0372 1.3332 5.28013 1.33329 5.53339C1.33338 5.78666 1.43408 6.02951 1.61322 6.20853L5.99165 10.586C6.52877 11.123 7.25716 11.4246 8.01665 11.4246C8.77613 11.4246 9.50452 11.123 10.0416 10.586L14.4201 6.20471C14.5844 6.02292 14.6726 5.78489 14.6663 5.53989C14.66 5.29489 14.5598 5.06169 14.3863 4.88858C14.2128 4.71547 13.9794 4.6157 13.7344 4.60992C13.4894 4.60415 13.2515 4.69282 13.0701 4.85758L8.69164 9.236C8.5126 9.41499 8.26981 9.51554 8.01665 9.51554C7.76348 9.51554 7.52069 9.41499 7.34165 9.236L2.96322 4.85758Z" fill="#D7E1EB"/>
                                      </svg>
                                    </span>
                                </div>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="oform-cont-left-sposob-box-paymentcard" id="oform-cont-left-sposob-box-paymentcard">
                            <form>
                              <label>Номер карты
                              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8889 0H3.11112C1.55557 0 0.333344 1.22222 0.333344 2.77778H13.6667C13.6667 1.22222 12.4445 0 10.8889 0Z" fill="#A5B4C3"/>
                                <path d="M0.333344 7.22396C0.333344 8.77951 1.55557 10.0017 3.11112 10.0017H10.8889C12.4445 10.0017 13.6667 8.77951 13.6667 7.22396V3.89062H0.333344V7.22396ZM4.22223 6.94618C4.22223 7.39063 3.83334 7.77951 3.3889 7.77951C2.94445 7.77951 2.55557 7.39063 2.55557 6.94618C2.55557 6.50174 2.94445 6.11285 3.3889 6.11285C3.83334 6.11285 4.22223 6.50174 4.22223 6.94618Z" fill="#A5B4C3"/>
                              </svg>

                               <input type="text" className="cardnumber" placeholder="0000 0000 0000 0000"/></label>
                              <div className="paymentflex">
                                <label>Срок действия <input type="text" placeholder="00/00"/></label>
                                <label>CVC <input type="text" placeholder="***"/></label>
                              </div>
                            </form>
                          </div>
                          <div className="oform-cont-left-sposob-box-btn"><input type="submit" value="Оплатить" /></div>
                        </div>
                      </TabPane>
                      <TabPane tab={
                        <div>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.24263 12.9586C8.48914 13.1982 8.82338 13.333 9.172 13.3333H9.57143V10.3L8.48629 9.94792C7.9974 9.78918 7.5825 9.46657 7.31577 9.03777C7.04903 8.60897 6.94784 8.10193 7.03028 7.60726C7.11272 7.11259 7.37341 6.66255 7.76577 6.33757C8.15812 6.0126 8.65656 5.83387 9.172 5.83333H9.57143V5.41667C9.57143 5.30616 9.61658 5.20018 9.69695 5.12204C9.77733 5.0439 9.88634 5 10 5C10.1137 5 10.2227 5.0439 10.303 5.12204C10.3834 5.20018 10.4286 5.30616 10.4286 5.41667V5.83333H10.828C11.3949 5.8337 11.9392 6.0493 12.3449 6.43419C12.7506 6.81908 12.9857 7.3428 13 7.89375V7.91667V7.945C13 8.05551 12.9548 8.16149 12.8745 8.23963C12.7941 8.31777 12.6851 8.36167 12.5714 8.36167C12.4578 8.36167 12.3488 8.31777 12.2684 8.23963C12.188 8.16149 12.1429 8.05551 12.1429 7.945C12.1425 7.60607 12.0039 7.28111 11.7574 7.04145C11.5109 6.80178 11.1766 6.667 10.828 6.66667H10.4286V9.7L11.5137 10.0521C12.0026 10.2108 12.4175 10.5334 12.6842 10.9622C12.951 11.391 13.0522 11.8981 12.9697 12.3927C12.8873 12.8874 12.6266 13.3374 12.2342 13.6624C11.8419 13.9874 11.3434 14.1661 10.828 14.1667H10.4286V14.5833C10.4286 14.6938 10.3834 14.7998 10.303 14.878C10.2227 14.9561 10.1137 15 10 15C9.88634 15 9.77733 14.9561 9.69695 14.878C9.61658 14.7998 9.57143 14.6938 9.57143 14.5833V14.1667H9.172C8.60513 14.1663 8.06083 13.9507 7.6551 13.5658C7.24937 13.1809 7.0143 12.6572 7 12.1062V12.0833V12.055C7 11.9445 7.04515 11.8385 7.12553 11.7604C7.2059 11.6822 7.31491 11.6383 7.42857 11.6383C7.54224 11.6383 7.65124 11.6822 7.73162 11.7604C7.81199 11.8385 7.85714 11.9445 7.85714 12.055C7.85748 12.3939 7.99612 12.7189 8.24263 12.9586ZM11.2429 10.8421L10.4286 10.5779V13.3333H10.828C11.1402 13.3332 11.4422 13.2251 11.68 13.0284C11.9177 12.8316 12.0757 12.559 12.1256 12.2593C12.1755 11.9596 12.1141 11.6525 11.9523 11.3928C11.7906 11.1332 11.5391 10.9379 11.2429 10.8421ZM8.04766 8.60716C8.20939 8.86682 8.46089 9.06205 8.75714 9.15792L9.57143 9.42208V6.66667H9.172C8.85977 6.66675 8.55776 6.77486 8.32001 6.97164C8.08227 7.16843 7.92432 7.44104 7.87441 7.7407C7.82451 8.04036 7.88593 8.3475 8.04766 8.60716Z" fill="#73C8EB"/>
                          </svg>

                        <p>С баланса</p>
                        </div>} key="2">
                        <div className="oform-cont-left-sposob-box">
                          <p>Ваш баланс:<span>130,00 $ </span></p>
                          <div className="oform-cont-left-sposob-box-chek">
                            <label onClick={balancechange1}><input type="checkbox" value="0" id="balance" /><span></span><p>С общего баланса </p><img src='/icons/Vascacstor.png' /></label>
                            <label onClick={balancechange2}><input type="checkbox" value="1" id="wallet" checked="true" /><span></span><p>С кошелька</p><img src='/icons/Vascacstor.png' /></label>
                          </div>
                          <div className="oform-cont-left-sposob-box-dow" id="oform-cont-left-sposob-box-dow">
                            <div className="oform-cont-left-sposob-box-dow-top">
                              <p>Выберите кошелек</p>
                              <Dropdown overlay={menu2}>
                                <div className="oform-cont-left-sposob-box-dow-item">
                                  <p>
                                    3PH84Xxa*****ZwZpT8Jzkm
                                  </p>
                                  <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.96322 4.85758C2.78407 4.67856 2.54115 4.57804 2.28789 4.57813C2.03462 4.57821 1.79177 4.67891 1.61275 4.85806C1.43372 5.0372 1.3332 5.28013 1.33329 5.53339C1.33338 5.78666 1.43408 6.02951 1.61322 6.20853L5.99165 10.586C6.52877 11.123 7.25716 11.4246 8.01665 11.4246C8.77613 11.4246 9.50452 11.123 10.0416 10.586L14.4201 6.20471C14.5844 6.02292 14.6726 5.78489 14.6663 5.53989C14.66 5.29489 14.5598 5.06169 14.3863 4.88858C14.2128 4.71547 13.9794 4.6157 13.7344 4.60992C13.4894 4.60415 13.2515 4.69282 13.0701 4.85758L8.69164 9.236C8.5126 9.41499 8.26981 9.51554 8.01665 9.51554C7.76348 9.51554 7.52069 9.41499 7.34165 9.236L2.96322 4.85758Z" fill="#D7E1EB"/>
                                    </svg>
                                  </span>
                                </div>
                              </Dropdown>
                            </div>
                            <div className="oform-cont-left-sposob-box-dow-top">
                              <p>Выберите валюту оплаты</p>
                              <Dropdown overlay={menu}>
                                <div className="oform-cont-left-sposob-box-dow-item">
                                    <p>
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M5.69227 1.33203V2.87049H3.64099V13.1269H5.69227V14.6654H6.71791V13.1269H7.74356V14.6654H8.7692V13.1269H9.53843C11.0907 13.1269 12.3589 11.8587 12.3589 10.3064C12.3589 9.2387 11.7641 8.30126 10.8846 7.82229C11.3162 7.44342 11.6221 6.9421 11.7617 6.38506C11.9014 5.82801 11.868 5.24166 11.6662 4.70402C11.4644 4.16638 11.1036 3.70295 10.6319 3.37541C10.1602 3.04787 9.59988 2.87175 9.02561 2.87049H8.7692V1.33203H7.74356V2.87049H6.71791V1.33203H5.69227ZM4.66663 3.89613H9.02561C10.023 3.89613 10.8205 4.69357 10.8205 5.69101C10.8205 6.68844 10.023 7.48588 9.02561 7.48588H4.66663V3.89613ZM4.66663 8.51152H9.53843C10.5359 8.51152 11.3333 9.30895 11.3333 10.3064C11.3333 11.3038 10.5359 12.1013 9.53843 12.1013H4.66663V8.51152Z" fill="#28323C"/>
                                      </svg>
                                      Bitcoin
                                    </p>
                                    <span>
                                      0.000000003
                                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2.96322 4.85758C2.78407 4.67856 2.54115 4.57804 2.28789 4.57813C2.03462 4.57821 1.79177 4.67891 1.61275 4.85806C1.43372 5.0372 1.3332 5.28013 1.33329 5.53339C1.33338 5.78666 1.43408 6.02951 1.61322 6.20853L5.99165 10.586C6.52877 11.123 7.25716 11.4246 8.01665 11.4246C8.77613 11.4246 9.50452 11.123 10.0416 10.586L14.4201 6.20471C14.5844 6.02292 14.6726 5.78489 14.6663 5.53989C14.66 5.29489 14.5598 5.06169 14.3863 4.88858C14.2128 4.71547 13.9794 4.6157 13.7344 4.60992C13.4894 4.60415 13.2515 4.69282 13.0701 4.85758L8.69164 9.236C8.5126 9.41499 8.26981 9.51554 8.01665 9.51554C7.76348 9.51554 7.52069 9.41499 7.34165 9.236L2.96322 4.85758Z" fill="#D7E1EB"/>
                                      </svg>
                                    </span>
                                </div>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="oform-cont-left-sposob-box-balance" id="oform-cont-left-sposob-box-balance">
                            <p>С Вашего общего баланса будет списано <span>133,00 $. </span></p>
                            <p>Система сама определит  с каких кошельков лучше всего списать средства. Узнать об алгоритме оплаты с общего баланса можно узнать в разделе <a>“Порядок оплаты”.</a></p>
                          </div>
                          <div className="oform-cont-left-sposob-box-btn"><input type="submit" value="Оплатить" /></div>
                        </div>
                      </TabPane>
                    </Tabs>
                  </div>
                </div>
                <div className="oform-cont-right">
                  <div className="oform-cont-right-top">
                    <h3>Счет</h3>
                    <div className="oform-cont-right-top-prices">
                      <div className="oform-cont-right-top-prices-item">
                        <p>Сумма покупки:</p>
                        <span>130,00 $</span>
                      </div>
                      <div className="oform-cont-right-top-prices-item">
                        <p>Доставка:</p>
                        <span>0</span>
                      </div>
                      <div className="oform-cont-right-top-prices-item">
                        <p>Страхование:</p>
                        <span>3,00 $</span>
                      </div>
                    </div>
                    <div className="oform-cont-right-top-itog">
                      <div className="oform-cont-right-top-itog-item">
                        <p>Итого:</p>
                        <span>133,00 $</span>
                      </div>
                      <div className="oform-cont-right-top-itog-item">
                        <p></p>
                        <span>TCP Credit 0.00000001</span>
                      </div>
                    </div>
                    <a>Оплатить</a>
                  </div>
                  <div className="oform-cont-right-bottom">
                    <h4>Товары</h4>
                    <div className="oform-cont-right-bottom-box">
                      <div className="oform-cont-right-bottom-box-item">
                        <img src="/icons/laptop (2).png" />
                        <h5>Iphone 5s<span>Цвет: белый, Объем памяти: 32 gb...</span></h5>
                        <p>130,00 $</p>
                      </div>
                      <div className="oform-cont-right-bottom-box-item">
                        <img src="/icons/laptop (2).png" />
                        <h5>Iphone 5s<span>Цвет: белый, Объем памяти: 32 gb...</span></h5>
                        <p>130,00 $</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Oform;
