import LogoForm from '../../../../../public/icons/logo.svg';
import Userlog from '../../../../../public/icons/formlogo.svg';
const DueAutofication = () => {
  return (
    <div className="reg-form">
      <div className="form_cont">
        <div className="logo-reg-form logoformblok">
        <img src={LogoForm} alt={'LogoForm'} />
          <img src={Userlog} alt={'LogoForm'} />
        </div>
        <div className="reg-form-section">
          <h2>Двухфакторная аутентификация</h2>
          <p className="due-autor">
            Введите код, который мы отправили на номер телефона, заканчивающийся
            на 83
          </p>
          <form>
            <div className="number-form">
              {' '}
              <inpaut type="number" min="0" max="9"/>
              <input type="number" min="0" max="9"/>
              <input type="number" min="0" max="9"/>
              <input type="number" min="0" max="9"/>
              <input type="number" min="0" max="9"/>
              <input type="number" min="0" max="9"/>
            </div>
            <a href="succes" className="sub-btn">
              Продолжить
            </a>
            <p>
              Не получили код? <a href="#">Отправить повторно</a>
            </p>
            <a href="avtorize">Войти в другой аккаунт</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DueAutofication;
