import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Button from "../../unikit/button"

const Support = () => {
    return (
      <div className="support">
          <div className="support-cont">
            <h1>Техническая поддержка</h1>
            <div className="support-cont-flex">
              <div className="support-cont-flex-left">
                <img src="/icons/fi-sr-headset.svg" />
                <p>Если у вас возникли вопросы или проблемы в работе сайта, просим вас обратиться в службу технической поддержки сайта TCP-Market. </p>
                <p>Наши специалисты отвечают на вопросы пользователей в порядке очереди. Для того что бы снизить назрузку на центр поддержки, перед тем как задать вопрос, проверьте его в разделе
                  <a>“Справка”.</a>
                </p>
              </div>
              <div className="support-cont-flex-right">
                <form>
                  <div className="support-cont-flex-right-top">
                    <label>Тема вопроса<input type="text" placeholder="Проблемы с сайтом " /></label>
                    <label>Ваше имя<input type="text" placeholder="Укажите Ваше имя" /></label>
                    <label>E-mail<input type="text" placeholder="Укажите Ваш E-mail" /></label>
                  </div>
                  <label className="textarea">Ваш вопрос<textarea placeholder="Опишите свою проблему..." /></label>
                  <div className="support-cont-flex-right-file">
                    <label><p>Приложить скриншот или документ</p><input type="file" /><Button text={"Выбрать файл"} colorclass={"noimg blue"} /></label>
                  </div>
                  <label className="sendbtn"><input type="submit" value="Отправить" /></label>
                </form>
              </div>
            </div>
          </div>
      </div>
    );
}
export default Support;
