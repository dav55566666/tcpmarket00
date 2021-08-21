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
import H2 from "../../unikit/abzac/h2"
import Button from "../../unikit/button"
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
const WalletStories = () => {
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
                  <div className="wallet_stories">
                    <H2 abzac={"Контроль расходов"} />
                    <div className="wallet_stories_slider">
                      <button className="prevslide"></button>
                      <Swiper navigation={{prevEl: ".prevslide", nextEl: ".nextslide"}} loop={true} className="mySwiper">
                        <SwiperSlide>
                          <div className="wallet_stories_top">
                            <p>Траты за<span>июнь</span></p>
                            <p>40 000 $</p>
                          </div>
                          <div className="wallet_stories_central">
                            <img src="/icons/chart (1).png"/>
                          </div>
                          <div className="wallet_stories_bottom">
                            <p className="darkblue">Покупки: -23 047 $</p>
                            <p className="violet">Торговля: +11 500 $</p>
                            <p className="blue">Питание: -300 $</p>
                            <p className="green">Переводы: -300 $</p>
                            <p className="orange">Путешествия: -2 321 $</p>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                      <button className="nextslide"></button>
                    </div>
                  </div>
                  <div className="debts">
                    <H2 abzac={"Задолженности"} />
                    <div className="debts_box">
                      <div className="debts_box_item">
                        <div className="debts_box_item_left">
                          <p>Расходы на имущество</p>
                          <span>Погасить до: 02.10.2021</span>
                        </div>
                        <div className="debts_box_item_right">
                          <p>211 $</p>
                          <Button text={"Погасить"} colorclass={"pink noimg"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wallet-cont-info-rigth">
                  <Story title={"2 июня"}>
                    <StoryItem centralp={"От:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (2).png"} type={"Перевод от пользователя"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"0.001$"} />
                    <StoryItem centralp={"-"} centralspan={""}  imgpath={"/icons/icon (2).png"} type={"Перевод от пользователя"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"+30 USDT"} />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"-"} centralspan={""}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"} />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Магазин:"} centralspan={"TCP market"}  imgpath={"/icons/icon (4).png"} type={"Покупка в магазине"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"} />
                    <StoryItem centralp={"Магазин:"} centralspan={"Ясно"}  imgpath={"/icons/icon (1).png"} type={"Продажа товара"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"+30 $ "} />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Кому:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"}  />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Кому:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"}  />
                  </Story>
                  <Story title={"1 июня"}>
                    <StoryItem centralp={"От:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (2).png"} type={"Перевод от пользователя"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"0.001$"} />
                    <StoryItem centralp={"-"} centralspan={""}  imgpath={"/icons/icon (2).png"} type={"Перевод от пользователя"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"+30 USDT"} />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"-"} centralspan={""}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"} />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Магазин:"} centralspan={"TCP market"}  imgpath={"/icons/icon (4).png"} type={"Покупка в магазине"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"} />
                    <StoryItem centralp={"Магазин:"} centralspan={"Ясно"}  imgpath={"/icons/icon (1).png"} type={"Продажа товара"} price={"20.08.2021, 21:40"} totalpricered={""} totalprice={"+30 $ "} />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Кому:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"}  />
                    <StoryItem imgpath2={"/icons/fi-sr-refresh.png"} centralp={"Кому:"} centralspan={"Руслан В."}  imgpath={"/icons/icon (3).png"} type={"Перевод пользователю"} price={"20.08.2021, 21:40"} totalpricered={"-30 USDT"}  />
                  </Story>
                  <Story title={"30 мая"}>
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
              </div>
            </div>
        </div>
    );
}
export default WalletStories;
