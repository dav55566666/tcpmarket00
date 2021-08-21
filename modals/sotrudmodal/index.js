import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
function cloussotrudmodal() {
 document.getElementById('sotrudmodal').style.display = "none";
}
const Sotrudmodal = () => {
    return (
        <div className="sotrudmodal" id="sotrudmodal">
            <div className="sotrudmodal-cont">
              <button onClick={cloussotrudmodal} className="clousmodal"></button>
              <h2>Добавить сотрудника</h2>
              <form>
                <label> Пользователь
                  <div><input type="text" placeholder="Введите кошелек пользователя" /><button type="button" name="button"><img src="/icons/qr.svg" alt="" /></button></div>
                </label>
              </form>
            </div>
        </div>
    );
}
export default Sotrudmodal;
