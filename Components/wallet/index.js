import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import UserRoomLinkItem from "../userroomlink/item"
import UserRoomLink from "../userroomlink"
import WalletsItem from "./wallets/item"
import Wallets from "./wallets"
import CryptowalletsItem from "./Cryptowallets/item"
import Cryptowallets from "./Cryptowallets"
import CardItem from "./cards/item"
import Card from "./cards"
import StoryItem from "./story/item"
import Story from "./story"
import { Menu, Dropdown } from 'antd';
import Yourwallet from "./yourwallet"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
  Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);
function showall(){
  document.getElementById('cryptowallet-js').style.height="max-content"
}
const menu = (
  <Menu className="walletantd">
    <Menu.Item>
      <UserRoomLink>
        <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={"wallet"} linkname={"Кошелек"} />
        <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={"walletstories"} linkname={"Операции"} />
        <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={""} linkname={"Имущество"} />
        <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={""} linkname={"Верификация"} />
      </UserRoomLink>
    </Menu.Item>
  </Menu>
);
function openwalletmodal() {
 document.getElementById('walletmodal').style.display = "block";
}
const Wallet = () => {
    return (
        <div className="wallet">
            <div className="wallet-cont">
              <UserRoomLink>
                <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={"wallet"} linkname={"Кошелек"} />
                <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={"walletstories"} linkname={"Операции"} />
                <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={""} linkname={"Имущество"} />
                <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={""} linkname={"Верификация"} />
              </UserRoomLink>
              <div className="mobilemenuwallet">
                <a>
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.49189 1.41371C9.64384 1.25638 9.72792 1.04566 9.72602 0.826939C9.72412 0.608218 9.63639 0.398993 9.48172 0.244328C9.32706 0.0896628 9.11784 0.00193216 8.89911 3.15345e-05C8.68039 -0.00186909 8.46967 0.0822124 8.31234 0.234166L1.49536 7.05115C0.713434 7.83331 0.27417 8.89402 0.27417 10C0.27417 11.106 0.713434 12.1667 1.49536 12.9489L8.31234 19.7658C8.46967 19.9178 8.68039 20.0019 8.89911 20C9.11784 19.9981 9.32706 19.9103 9.48172 19.7557C9.63639 19.601 9.72412 19.3918 9.72602 19.1731C9.72792 18.9543 9.64384 18.7436 9.49189 18.5863L2.6749 11.7693C2.20575 11.3 1.94219 10.6636 1.94219 10C1.94219 9.33641 2.20575 8.69999 2.6749 8.23069L9.49189 1.41371Z" fill="#A5B4C3"/>
                  </svg>
                </a>
                <p>Кошелек</p>
                <Dropdown overlay={menu}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1667 11.1641H2.83333C2.3731 11.1641 2 11.5372 2 11.9974C2 12.4576 2.3731 12.8307 2.83333 12.8307H21.1667C21.6269 12.8307 22 12.4576 22 11.9974C22 11.5372 21.6269 11.1641 21.1667 11.1641Z" fill="#A5B4C3"/>
                    <path d="M21.1667 5.33203H2.83333C2.3731 5.33203 2 5.70513 2 6.16536C2 6.6256 2.3731 6.9987 2.83333 6.9987H21.1667C21.6269 6.9987 22 6.6256 22 6.16536C22 5.70513 21.6269 5.33203 21.1667 5.33203Z" fill="#A5B4C3"/>
                    <path d="M21.1667 17H2.83333C2.3731 17 2 17.3731 2 17.8333C2 18.2936 2.3731 18.6667 2.83333 18.6667H21.1667C21.6269 18.6667 22 18.2936 22 17.8333C22 17.3731 21.6269 17 21.1667 17Z" fill="#A5B4C3"/>
                  </svg>
                </Dropdown>
              </div>
              <div className="wallet-cont-info">
                <div className="wallet-cont-info-left">
                  <Wallets title={"Кошельки"}>
                    <WalletsItem walletsname={"кошелек 1"} />
                    <WalletsItem walletsname={"кошелек 2"} />
                    <WalletsItem walletsname={"кошелек 3"} />
                  </Wallets>
                  <Yourwallet title={"Мой кошелек"} imgpath={"/icons/icon (1).png"} yourwalletname={"3PH84XxaY8iqfKqNT1asx8ULBZwZpT8Jzkm"} />
                  <Cryptowallets title={"Криптокошельки"}>
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"TCP Credit"} price={"1,00 $"} smooth={"0%"} plus={""} minus={""} totalprice={"200,5 TCP Credit"} aboutprice={"≈ 200,5 USD"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"TCP Credit"} price={"1,00 $"} smooth={"0%"} plus={""} minus={""} totalprice={"1000 TCP Cent"} aboutprice={"≈ 10,0 USD"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"TCP.finance"} price={"48781,63 $"} smooth={""} plus={"+0.01%"} minus={""} totalprice={"0,001 TCP.Finance"} aboutprice={"≈ 4,84 USD"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Банковская карта"} price={"2175,18 $"} smooth={"0%"} plus={""} minus={""} totalprice={"0,003 $"} aboutprice={""} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Банковский счет "} price={"0,229928 $"} smooth={"0%"} plus={""} minus={""} totalprice={"0,003 $"} aboutprice={""} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Бизнес счет"} price={"1,0,229928 $ $"} smooth={"0%"} plus={""} minus={""} totalprice={"0,003 $"} aboutprice={""} />
                  </Cryptowallets>
                  <Cryptowallets>
                    <div className="cryptowallet-js" id="cryptowallet-js">
                      <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Binance Coin"} price={"2175,18 $"} minus={"-12.02%"} />
                      <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Waves"} price={"2175,18 $"} minus={"-12.45%"} />
                      <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                      <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                      <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                      <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                      <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                      <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                      <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                      <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                    </div>
                    <button className="showallbtn" onClick={showall} >Показать все (25)</button>
                  </Cryptowallets>
                  <div className="accounts">
                    <Cryptowallets title={"Счета"}>
                      <CryptowalletsItem imgpath={"/icons/icon (1).svg"} type={"Общий счет"}  totalprice={"0,001 $"} />
                      <CryptowalletsItem imgpath={"/icons/icon (2).svg"} type={"Счет магазина"}  totalprice={"0,001 $"} />
                      <CryptowalletsItem imgpath={"/icons/icon (3).svg"} type={"Бизнес счет"}  totalprice={"0,001 $"} />
                    </Cryptowallets>
                  </div>
                </div>
                <div className="wallet-cont-info-rigth">
                  <div className="wallet-cont-info-rigth-top">
                    <div className="wallet-cont-info-rigth-top-balance">
                      <h2>Общий баланс</h2>
                      <div className="balance-box">
                        <p>30 000,64 $ <img src="/icons/fi-sr-refresh money.svg" /></p>
                        <a onClick={openwalletmodal}>Контроль расходов <img src="/icons/go to.svg" /></a>
                      </div>
                      <Card>
                        <CardItem imgcard={"/icons/mastercard.png"} cardtype={"Кредитная карта "} cardkod={"**** 5821"} cardprice={"12,35 $"} />
                        <CardItem imgcard={"/icons/visa.png"} cardtype={"Кредитная карта "} cardkod={"**** 5821"} cardprice={"12,35 $"} />
                      </Card>
                    </div>
                    <div className="wallet-cont-info-rigth-top-income">
                      <div className="wallet-cont-info-rigth-top-income-title">
                        <h2>Доход De-fi</h2>
                        <p><img src="/icons/Arrow 3.png" />+20%</p>
                      </div>
                      <Swiper pagination={true} loop={true} spaceBetween={30} className="mySwiper">
                        <SwiperSlide><img src="/icons/chart (2).png" /></SwiperSlide>
                        <SwiperSlide><img src="/icons/chart (2).png" /></SwiperSlide>
                        <SwiperSlide><img src="/icons/chart (2).png" /></SwiperSlide>
                      </Swiper>
                      <div className="wallet-cont-info-rigth-top-income-links">
                        <a><img src="/icons/icon (4).svg" />Пасcивный доход  </a>
                        <a><img src="/icons/icon (5).svg" />Стать инвестором </a>
                        <a><img src="/icons/icon (6).svg" />De-fi  </a>
                        <a><img src="/icons/icon (7).svg" />Открыть счет для бизнеса </a>
                        <a><img src="/icons/icon (8).svg" />Открыть персональный счет  </a>
                      </div>
                    </div>
                  </div>
                  <Story title={"История операций"}>
                    <StoryItem centralp={"От:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (2).png"} type={"Перевод от пользователя"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"0.001$"} />
                    <StoryItem centralp={"-"} centralspan={""}  imgpath={"/icons/icon (2).png"} type={"Перевод от пользователя"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"+30 USDT"} />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"-"} centralspan={""}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"} />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Магазин:"} centralspan={"TCP market"}  imgpath={"/icons/icon (4).png"} type={"Покупка в магазине"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"} />
                    <StoryItem centralp={"Магазин:"} centralspan={"Ясно"}  imgpath={"/icons/icon (1).png"} type={"Продажа товара"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"+30 $ "} />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Кому:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"}  />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Кому:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"}  />
                  </Story>
                </div>
              </div>
              <div className="wallet-cont-info wallet-cont-info-mobilde">
                <Wallets title={"Кошельки"}>
                  <WalletsItem walletsname={"кошелек 1"} />
                  <WalletsItem walletsname={"кошелек 2"} />
                  <WalletsItem walletsname={"кошелек 3"} />
                </Wallets>
                <Yourwallet title={"Мой кошелек"} imgpath={"/icons/icon (1).png"} yourwalletname={"3PH84XxaY8iqfKqNT1asx8ULB ZwZpT8Jzkm"} />
                <h2>Общий баланс</h2>
                <div className="balance-box">
                  <p>30 000,64 $ <img src="/icons/fi-sr-refresh money.svg" /></p>
                  <a onClick={openwalletmodal}>Контроль расходов <img src="/icons/go to.svg" /></a>
                </div>
                <Card>
                  <div className="overflocard">
                    <CardItem imgcard={"/icons/mastercard.png"} cardtype={"Кредитная карта "} cardkod={"**** 5821"} cardprice={"12,35 $"} />
                    <CardItem imgcard={"/icons/visa.png"} cardtype={"Кредитная карта "} cardkod={"**** 5821"} cardprice={"12,35 $"} />
                  </div>
                </Card>
                <Cryptowallets title={"Криптокошельки"}>
                  <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"TCP Credit"} price={"1,00 $"} smooth={"0%"} plus={""} minus={""} totalprice={"200,5 TCP Credit"} aboutprice={"≈ 200,5 USD"} />
                  <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"TCP Credit"} price={"1,00 $"} smooth={"0%"} plus={""} minus={""} totalprice={"1000 TCP Cent"} aboutprice={"≈ 10,0 USD"} />
                  <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"TCP.finance"} price={"48781,63 $"} smooth={""} plus={"+0.01%"} minus={""} totalprice={"0,001 TCP.Finance"} aboutprice={"≈ 4,84 USD"} />
                  <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Банковская карта"} price={"2175,18 $"} smooth={"0%"} plus={""} minus={""} totalprice={"0,003 $"} aboutprice={""} />
                  <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Банковский счет "} price={"0,229928 $"} smooth={"0%"} plus={""} minus={""} totalprice={"0,003 $"} aboutprice={""} />
                  <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Бизнес счет"} price={"1,0,229928 $ $"} smooth={"0%"} plus={""} minus={""} totalprice={"0,003 $"} aboutprice={""} />
                </Cryptowallets>
                <Cryptowallets>
                  <div className="cryptowallet-js" id="cryptowallet-js">
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Binance Coin"} price={"2175,18 $"} minus={"-12.02%"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Waves"} price={"2175,18 $"} minus={"-12.45%"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                    <CryptowalletsItem imgpath={"/icons/icon (1).png"} type={"Ripple"} price={"1,04401 $"} minus={"-15.81%"} />
                  </div>
                  <button className="showallbtn" onClick={showall} >Показать все (25)</button>
                </Cryptowallets>
                <div className="accounts">
                  <Cryptowallets title={"Счета"}>
                    <CryptowalletsItem imgpath={"/icons/icon (1).svg"} type={"Общий счет"}  totalprice={"0,001 $"} />
                    <CryptowalletsItem imgpath={"/icons/icon (2).svg"} type={"Счет магазина"}  totalprice={"0,001 $"} />
                    <CryptowalletsItem imgpath={"/icons/icon (3).svg"} type={"Бизнес счет"}  totalprice={"0,001 $"} />
                  </Cryptowallets>
                </div>
                <Story title={"История операций"}>
                  <StoryItem centralp={"От:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (2).png"} type={"Перевод от пользователя"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"0.001$"} />
                  <StoryItem centralp={"-"} centralspan={""}  imgpath={"/icons/icon (2).png"} type={"Перевод от пользователя"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"+30 USDT"} />
                  <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"-"} centralspan={""}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"} />
                  <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Магазин:"} centralspan={"TCP market"}  imgpath={"/icons/icon (4).png"} type={"Покупка в магазине"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"} />
                  <StoryItem centralp={"Магазин:"} centralspan={"Ясно"}  imgpath={"/icons/icon (1).png"} type={"Продажа товара"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"+30 $ "} />
                  <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Кому:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"}  />
                  <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Кому:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"}  />
                </Story>
                <div className="wallet-cont-info-rigth-top-income">
                  <div className="wallet-cont-info-rigth-top-income-title">
                    <h2>Доход De-fi</h2>
                    <p><img src="/icons/Arrow 3.png" />+20%</p>
                  </div>
                  <Swiper pagination={true} loop={true} spaceBetween={30} slidesPerView={'auto'} className="mySwiper">
                    <SwiperSlide><img src="/icons/chart (2).png" /></SwiperSlide>
                    <SwiperSlide><img src="/icons/chart (2).png" /></SwiperSlide>
                    <SwiperSlide><img src="/icons/chart (2).png" /></SwiperSlide>
                  </Swiper>
                  <div className="wallet-cont-info-rigth-top-income-links">
                    <a><img src="/icons/icon (4).svg" />Пасcивный доход  </a>
                    <a><img src="/icons/icon (5).svg" />Стать инвестором </a>
                    <a><img src="/icons/icon (6).svg" />De-fi  </a>
                    <a><img src="/icons/icon (7).svg" />Открыть счет для бизнеса </a>
                    <a><img src="/icons/icon (8).svg" />Открыть персональный счет  </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}
export default Wallet;
