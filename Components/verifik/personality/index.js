import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Button from "../../../unikit/button"
import H4 from "../../../unikit/abzac/h4"
import PBig from "../../../unikit/text/bignormal"

function openlastblock (){
  document.getElementById('firstblock').style.display = "none";
  document.querySelector('.verifik-personality-last').style.display = "block";
}

const Personality = () => {
    return (
        <div className="verifik-personality">
          <div className="verifik-personality-first" id="firstblock">
            <div className="verifik-personality-first-flex">
              <div className="verifik-personality-first-flex-left">
                <h4 className="title">
                  <img src="/icons/fi-sr-user.svg" />
                  Верификация личности
                </h4>
                <PBig className="opistext" text={"Верификация личности необходима для совершения финацовых операций, а также совершения некоторых типов сделок."} />
                <H4 abzac={"Для верификации загрузите один из документов:"} />
                <ul>
                  <li>ID карта;</li>
                  <li>Внутрений паспорт;</li>
                  <li>Водительское удостоверение;</li>
                  <li>Загран паспорт.</li>
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
          <div className="verifik-personality-last">
            <h4 className="title">
              <img src="/icons/fi-sr-user.svg" />
              Верификация личности
            </h4>
            <PBig text={"Верификация личности необходима для совершения финасовых операций, а также совершения некоторых типов сделок."} />
            <h4 className="title-bottom">
              <img src="/icons/fi-sr-cheasdck.svg" />
              Верификация личности
            </h4>
          </div>
        </div>
    );
}
export default Personality;
