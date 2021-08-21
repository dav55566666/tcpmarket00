import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import UserRoomLinkItem from "../userroomlink/item"
import UserRoomLink from "../userroomlink"
import {Menu, Dropdown,Tabs } from 'antd';
import 'antd/dist/antd.css';
import Personality from "./personality"
const { TabPane } = Tabs;
import Formverify from "./form"
import Address from "./adresform"

const menu = (
  <Menu className="walletantd">
    <Menu.Item>
      <UserRoomLink>
        <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={"wallet"} linkname={"Кошелек"} />
        <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={""} linkname={"Операции"} />
        <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={""} linkname={"Имущество"} />
        <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={""} linkname={"Верификация"} />
      </UserRoomLink>
    </Menu.Item>
  </Menu>
);
const Verifik = () => {
    return (

        <div className="verifik">
            <div className="verifik-cont">
              <div className="mobilemenuwallet">
                <a>
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.49189 1.41371C9.64384 1.25638 9.72792 1.04566 9.72602 0.826939C9.72412 0.608218 9.63639 0.398993 9.48172 0.244328C9.32706 0.0896628 9.11784 0.00193216 8.89911 3.15345e-05C8.68039 -0.00186909 8.46967 0.0822124 8.31234 0.234166L1.49536 7.05115C0.713434 7.83331 0.27417 8.89402 0.27417 10C0.27417 11.106 0.713434 12.1667 1.49536 12.9489L8.31234 19.7658C8.46967 19.9178 8.68039 20.0019 8.89911 20C9.11784 19.9981 9.32706 19.9103 9.48172 19.7557C9.63639 19.601 9.72412 19.3918 9.72602 19.1731C9.72792 18.9543 9.64384 18.7436 9.49189 18.5863L2.6749 11.7693C2.20575 11.3 1.94219 10.6636 1.94219 10C1.94219 9.33641 2.20575 8.69999 2.6749 8.23069L9.49189 1.41371Z" fill="#A5B4C3"/>
                  </svg>
                </a>
                <p>Мои товары/ услуги</p>
                <Dropdown overlay={menu}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1667 11.1641H2.83333C2.3731 11.1641 2 11.5372 2 11.9974C2 12.4576 2.3731 12.8307 2.83333 12.8307H21.1667C21.6269 12.8307 22 12.4576 22 11.9974C22 11.5372 21.6269 11.1641 21.1667 11.1641Z" fill="#A5B4C3"/>
                    <path d="M21.1667 5.33203H2.83333C2.3731 5.33203 2 5.70513 2 6.16536C2 6.6256 2.3731 6.9987 2.83333 6.9987H21.1667C21.6269 6.9987 22 6.6256 22 6.16536C22 5.70513 21.6269 5.33203 21.1667 5.33203Z" fill="#A5B4C3"/>
                    <path d="M21.1667 17H2.83333C2.3731 17 2 17.3731 2 17.8333C2 18.2936 2.3731 18.6667 2.83333 18.6667H21.1667C21.6269 18.6667 22 18.2936 22 17.8333C22 17.3731 21.6269 17 21.1667 17Z" fill="#A5B4C3"/>
                  </svg>
                </Dropdown>
              </div>
              <UserRoomLink>
                <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={"wallet"} linkname={"Кошелек"} />
                <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={""} linkname={"Операции"} />
                <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={""} linkname={"Имущество"} />
                <UserRoomLinkItem linkimg={"/icons/Wallet.svg"} linkhref={""} linkname={"Верификация"} />
              </UserRoomLink>
              <div className="verifik-cont-right">
              <Tabs defaultActiveKey="1">
                <TabPane tab={
                  <div className="verifitabbtn">
                    <img src="/icons/fi-sr-user.svg" />
                    <p>Личность</p>
                  </div>
                } key="1">
                  <Personality />
                </TabPane>
                <TabPane tab={
                  <div className="verifitabbtn">
                    <img src="/icons/fi-sr-marker.svg" />
                    <p>Адрес</p>
                  </div>
                } key="2">
                  <Address />
                </TabPane>
                <TabPane tab={
                  <div className="verifitabbtn">
                    <img src="/icons/fi-sr-briefcase.svg" />
                    <p>Компания</p>
                  </div>
                } key="3">
                  <Formverify />
                </TabPane>
              </Tabs>
              </div>
            </div>
        </div>
    );
}
export default Verifik;
