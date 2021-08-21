import React from 'react';
import LogoForm from '../../../../public/icons/logo.svg';
import Userlog from '../../../../public/icons/formlogo.svg';
export default function getPassword() {
  return (
    <div className="reg-form">
      <div className="form_cont">
        <div className="logo-reg-form logoformblok">
        <img src={LogoForm} alt={'LogoForm'} />
          <img src={Userlog} alt={'LogoForm'} />
        </div>
        <div className="reg-form-section">
          <h2>Восстановление доступа</h2>
          <p className="quiz-autor">
            Введите код, который мы отправили на номер телефона, заканчивающийся
            на 83
          </p>
          <form>
            <div className="number-form">
              {' '}
              <inpaut type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
            </div>
            <p>
              Не получили код? <a href="#">Отправить повторно</a>
            </p>
            <a href="#" className="not-code">
              Используйте другой метод для получения кода
            </a>
            <a href="avtorize">Войти в другой аккаунт</a>
          </form>
        </div>
      </div>
    </div>
  );
}
