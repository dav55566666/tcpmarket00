import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Button from "../../../unikit/button"
import H4 from "../../../unikit/abzac/h4"
import PBig from "../../../unikit/text/bignormal"
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu className="verifydropdown">
    <Menu.Item>
      <div className="verifydrop">
        <div className="verifydrop-left">
          <img src="/icons/US.svg" />
          <p>United States </p>
        </div>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="verifydrop">
        <div className="verifydrop-left">
          <img src="/icons/US.svg" />
          <p>United States </p>
        </div>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="verifydrop">
        <div className="verifydrop-left">
          <img src="/icons/US.svg" />
          <p>United States </p>
        </div>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="verifydrop">
        <div className="verifydrop-left">
          <img src="/icons/US.svg" />
          <p>United States </p>
        </div>
      </div>
    </Menu.Item>
  </Menu>
);
function openlastblock (){
  document.getElementById('firstform').style.display = "none";
  document.getElementById('lastform').style.display = "block";
}
const Formverify = () => {
    return (
      <div className="formcont">
        <div className="verifik-form" id="firstform">
          <h4 className="title">
            <img src="/icons/fi-sr-briefcasdadase.svg" />
            Верификация компании
          </h4>
          <PBig text={"После верификации компании Вам будет доступен расширенный функционал магазина, а также новые функции кошелька."} />
          <form>
            <div className="verifik-form-top">
              <label> Название компании *
                <input type="text" placeholder="Введите название компании " />
              </label>
              <label> Владелец компании *
                <input type="text" placeholder="ФИО юридического лица  " />
              </label>
              <label> Страна регистрации *
              <Dropdown overlay={menu}>
                <div className="verifydrop">
                  <div className="verifydrop-left">
                    <img src="/icons/US.svg" />
                    <p>United States </p>
                  </div>
                  <div className="verifydrop-right">
                    <img src="/icons/fi-sr-angle-small-down.svg" />
                  </div>
                </div>
              </Dropdown>
              </label>
              <label> Регистрационный номер *
                <input type="text" placeholder="Укажите регистрационный номер" />
              </label>
            </div>
            <div className="verifik-form-bottom">
              <div className="verifik-form-bottom-left">
                <p>Приложить документ</p>
                <Button  colorclass={"noimg blue verifibtn"} text={"Выбрать файл"}  />
              </div>
              <div className="verifik-form-bottom-right">
                <p><span>* Внимание! </span> Приложеные документы влияют на процедуру верификации.</p>
                <ul>
                  <li>Если вы являетесь доверенным лицом, приложите генеральную доверенность на Ваше имя;</li>
                  <li>Если у Вас есть документы подтверждающие право владения, приложите их для верификации.</li>
                </ul>
              </div>
            </div>
            <div onClick={openlastblock}>
              <Button  colorclass={"noimg violet verifibtn"} text={"Отправить на проверку"}  />
            </div>
          </form>
        </div>
        <div className="verifik-personality-last" id="lastform">
          <h4 className="title">
            <img src="/icons/fi-sr-briefcasdadase.svg" />
            Верификация компании
          </h4>
          <PBig text={"Верификация компании необходима для совершения финасовых операций, а также совершения некоторых типов сделок."} />
          <h4 className="title-bottom">
            <img src="/icons/fi-sr-cheasdck.svg" />
            Успешно верифицирован
          </h4>
        </div>
      </div>
    );
}
export default Formverify;
