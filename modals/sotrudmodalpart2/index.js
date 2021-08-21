import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Button from "../../unikit/button"
function cloussotrudmodal() {
 document.getElementById('sotrudmodalpart2').style.display = "none";
}
const Sotrudmodalpart2 = () => {
    return (
        <div className="sotrudmodal" id="sotrudmodalpart2">
            <div className="sotrudmodal-cont">
              <button onClick={cloussotrudmodal} className="clousmodal"></button>
              <h2>Добавить сотрудника</h2>
              <form>
                <label> Пользователь
                  <div><input type="text" placeholder="Введите кошелек пользователя" /><button type="button" name="button"><img src="/icons/qr.svg" alt="" /></button></div>
                </label>
                <div className="kod">
                  <img src="/icons/fi-sr-dollar.svg"/>
                  <p>3PH84XxaY8iqfKqNT1asx8ULBZwZpT8Jzkm</p>
                </div>
                <Button colorclass={"noimg pink"} text={"Назначить"} />
              </form>
            </div>
        </div>
    );
}
export default Sotrudmodalpart2;
