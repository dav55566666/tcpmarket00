import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Button from "../../../unikit/button"
import H4 from "../../../unikit/abzac/h4"
import PBig from "../../../unikit/text/bignormal"

function openlastblock (){
  document.getElementById('firstbloc2k').style.display = "none";
  document.getElementById('lastblock').style.display = "block";
}

const Address = () => {
    return (
        <div className="verifik-personality">
          <div className="verifik-personality-first" id="firstbloc2k">
            <div className="verifik-personality-first-flex">
              <div className="verifik-personality-first-flex-left">
                <h4 className="title">
                  <img src="/icons/fi-sr-user.svg" />
                  Верификация места проживания
                </h4>
                <PBig className="opistext" text={"Для использования функции кридитования, а также для расширения функциональных возможностей сайта, пройдите верификацию адреса проживания."} />
                <H4 abzac={"Для верификации загрузите один из документов:"} />
                <ul>
                  <li>Страницу с пропиской в паспорте; </li>
                  <li>Выписку с банковского счета с указанием места вашей регистрации;</li>
                  <li>Счет за коммунальные услуги с вашим именем.</li>
                </ul>
                <p className="lastp">
                  <span>* Внимание!</span>
                  Ознакомиться с доступностью документов в вашей стране можно на странице
                  <a>“Порядок верификации”</a>.
                </p>

              </div>
              <div className="verifik-personality-first-flex-right">
                <H4 abzac={"Загрузите документ удостоверяющий личность"} />
                <div className="verifik-personality-first-flex-right-box">
                  <form>
                    <input type="file" />
                    <img src="/icons/fi-sr-download.svg" />
                    <p>Перетащите файл или нажмите на область загрузки</p>
                  </form>
                </div>
              </div>
            </div>
            <div onClick={openlastblock}>
            <Button  colorclass={"noimg violet verifibtn"} text={"Отправить на проверку"}  /></div>
          </div>
          <div className="verifik-personality-last" id="lastblock">
            <h4 className="title">
              <img src="/icons/fi-sr-user.svg" />
              Верификация места проживания
            </h4>
            <PBig text={"Верификация места проживания необходима для совершения финасовых операций, а также совершения некоторых типов сделок."} />
            <h4 className="title-bottom">
              <img src="/icons/fi-sr-cheasdck.svg" />
              Верификация места проживания
            </h4>
          </div>
        </div>
    );
}
export default Address;
