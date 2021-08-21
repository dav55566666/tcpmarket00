import React from 'react';
import LogoForm from '../../../../public/icons/logo.svg';
import Userlog from '../../../../public/icons/formlogo.svg';
export default function GetEmail() {
  function onKeyPressed(e) {
    if(e==83){
      document.location.href='http://localhost:3000'
    }
  }
  return (
    <div className="reg-form" onKeyDown={onKeyPressed}>
      <div className="form_cont">
        <div className="logo-reg-form logoformblok">
          <img src={LogoForm} alt={'LogoForm'} />
          <img src={Userlog} alt={'LogoForm'} />
        </div>
        <div className="reg-form-section">
          <h2>Восстановление доступа</h2>
          <p className="quiz-autor">
            Для восстановления доступа укажите ваш e-mail или номер телефона.
          </p>
          <form action="autofication">
            <label>E-mail или телефон</label>
            <input  type="email" className="email-to" />
            <p>
              <a href="#">Зарегистрироватся</a>
            </p>
            <a href="#" className="not-code">
              Войти в другой аккаунт
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
