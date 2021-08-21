import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Button from "../../unikit/button"
function cloussotrudmodal() {
 document.getElementById('sotrudmodacustom').style.display = "none";
}
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item><p>Менеджер</p></Menu.Item>
    <Menu.Item><p>Менеджер</p></Menu.Item>
    <Menu.Item><p>Менеджер</p></Menu.Item>
    <Menu.Item><p>Менеджер</p></Menu.Item>
    <Menu.Item><p>Менеджер</p></Menu.Item>
  </Menu>
);

const Sotrudmodalcustom = () => {
    return (
        <div className="sotrudmodalcustom" id="sotrudmodacustom">
            <div className="sotrudmodalcustom-cont">
              <button onClick={cloussotrudmodal} className="clousmodal"></button>
              <h2>Редактирование</h2>
              <div className="sotrudmodalcustom-cont-form">
                <form>
                  <div className="sotrudmodalcustom-cont-form-top">
                    <label> Имя
                      <input type="text" placeholder="Андрей"/>
                    </label>
                    <label> Должность
                    <Dropdown overlay={menu}>
                      <div className="select">
                        <p>Менеджер</p>
                        <img src="/icons/cascas.svg" />
                      </div>
                    </Dropdown>
                    </label>
                  </div>
                  <div className="sotrudmodalcustom-cont-form-chekbox">
                    <h4>Доступ</h4>
                    <div className="sotrudmodalcustom-cont-form-chekbox-flex">
                      <label>
                          <input type="checkbox" />
                          <span className="chekspan"></span>
                          <p>Товары и услуги</p>
                      </label>
                      <label>
                          <input type="checkbox" />
                          <span className="chekspan"></span>
                          <p>Бухгалтерия</p>
                      </label>
                      <label>
                          <input type="checkbox" />
                          <span className="chekspan"></span>
                          <p>Заказы</p>
                      </label>
                      <label>
                          <input type="checkbox" />
                          <span className="chekspan"></span>
                          <p>Настройки</p>
                      </label>
                      <label>
                          <input type="checkbox" />
                          <span className="chekspan"></span>
                          <p>Сотрудники</p>
                      </label>
                    </div>
                  </div>
                  <div className="sotrudmodalcustom-cont-form-chekbox">
                    <h4>Ограничения</h4>
                    <div className="sotrudmodalcustom-cont-form-chekbox-flex">
                      <label className="allwidth">
                          <input type="checkbox" />
                          <span className="chekspan"></span>
                          <p>Ограниченный доступ
                            <span>Ограниченый доступ запрещает редактирование разрешенных разделов</span>
                          </p>
                      </label>
                    </div>
                  </div>
                  <Button colorclass={"noimg pink sotrudbtn"} text={"Сохранить"} />
                </form>
              </div>
            </div>

        </div>
    );
}
export default Sotrudmodalcustom;
