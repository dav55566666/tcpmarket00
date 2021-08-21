import React from 'react';
import LogoForm from '../../../../public/icons/logo.svg';
import SuccesLogo from '../../../../public/icons/succes.svg';
import Userlog from '../../../../public/icons/formlogo.svg';
export default function Succes() {
  return (
    <div className="reg-form">
      <div className="form_cont">
        <div className="logo-reg-form logoformblok">
        <img src={LogoForm} alt={'LogoForm'} />
          <img src={Userlog} alt={'LogoForm'} />
        </div>
        <div className="reg-form-section">
          <img src={SuccesLogo} />
          <h2 className="pass-edit">Ваш пароль успешно изменен!</h2>
          <button className="succes-btn">Продолжить</button>
        </div>
      </div>
    </div>
  );
}
