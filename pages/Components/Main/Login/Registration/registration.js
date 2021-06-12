import React from 'react';
import LogoForm from '../../../../../public/icons/logo.svg';
import Userlog from '../../../../../public/icons/formlogo.svg';
const Registration = () => {
  return (
    <div className="reg-form">
      <div className="form_cont">
        <div className="logo-reg-form logoformblok">
          <img src={LogoForm} alt={'LogoForm'} />
          <img src={Userlog} alt={'LogoForm'} />
        </div>
        <div className="reg-form-section">
          <h2>Регистрация</h2>
          <p className="quiz-autor">
            <h3>Уже зарегистрированы?</h3>
            <a href="avtorize">Войти</a>
          </p>
          <form>
            <label htmlFor="email">E-mail или телефон</label>
            <input type="email" placeholder="Email" id="email-phone" />

            <div className="end-reg-Form">
              <input type="submit" value="Продолжить" className="sub-btn" />
            </div>
            <p className="regbottomtext">
              Нажимая «Продолжить», я подтверждаю, что ознакомился с положениями,
              указанными в статьях <a href="">Условия использования</a> и{' '}
              <a href="#">Политика конфиденциальности</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
