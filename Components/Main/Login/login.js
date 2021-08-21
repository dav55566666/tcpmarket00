import React, {Component} from 'react';
import User from '../../../public/icons/user.svg';

export default class Login extends Component {
  state = {};
  render() {
    return (
      <div className="login-block">
          <div className="user-img">
            <div className="logo-user">
              <img src={User} alt="User" />
            </div>
            <h2>Добро пожаловать в TCP Market</h2>
          </div>
          <form className="login-form">
            <a className="login" className="sign-in" href="avtorize">
              Войти
            </a>

            <a className="sign-in" href="registr">
              Регистрация
            </a>
          </form>
      </div>
    );
  }
}
