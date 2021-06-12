import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const ProductInfo = () => {
    return (
        <div className="productinfo">
            <div className="productinfo-cont">
              <h2>Информация о товаре</h2>
              <div className="productinfo-cont-flex">
                <div className="productinfo-cont-flex-left">
                  <div className="productinfo-cont-flex-left-ocenka">
                    <p>Общий рейтинг</p>
                    <div className="starts">
                      <img src="/icons/star.svg" />
                      <img src="/icons/star.svg" />
                      <img src="/icons/star.svg" />
                      <img src="/icons/star.svg" />
                      <img src="/icons/star.svg" />
                      <span>3.6</span>
                    </div>
                    <p className="ozivnum">188 отзывов о товаре</p>
                    <div className="otzivbox">
                      <div className="otzivbox-item">
                        <div className="otzivbox-item-left">
                          <span>5</span>
                          <img src="/icons/stars.svg" />
                        </div>
                        <div className="otzivbox-item-central">
                          <span></span>
                        </div>
                        <div className="otzivbox-item-right">
                          <span>70%</span>
                        </div>
                      </div>
                      <div className="otzivbox-item">
                        <div className="otzivbox-item-left">
                          <span>4</span>
                          <img src="/icons/stars.svg" />
                        </div>
                        <div className="otzivbox-item-central">
                          <span></span>
                        </div>
                        <div className="otzivbox-item-right">
                          <span>28%</span>
                        </div>
                      </div>
                      <div className="otzivbox-item">
                        <div className="otzivbox-item-left">
                          <span>3</span>
                          <img src="/icons/stars.svg" />
                        </div>
                        <div className="otzivbox-item-central">
                          <span></span>
                        </div>
                        <div className="otzivbox-item-right">
                          <span>1%</span>
                        </div>
                      </div>
                      <div className="otzivbox-item">
                        <div className="otzivbox-item-left">
                          <span>2</span>
                          <img src="/icons/stars.svg" />
                        </div>
                        <div className="otzivbox-item-central">
                          <span></span>
                        </div>
                        <div className="otzivbox-item-right">
                          <span>0%</span>
                        </div>
                      </div>
                      <div className="otzivbox-item">
                        <div className="otzivbox-item-left">
                          <span>1</span>
                          <img src="/icons/stars.svg" />
                        </div>
                        <div className="otzivbox-item-central">
                          <span></span>
                        </div>
                        <div className="otzivbox-item-right">
                          <span>0%</span>
                        </div>
                      </div>
                    </div>
                    <a>Читать все</a>
                  </div>
                  <div className="productinfo-cont-flex-left-bottom">
                    <p>Реклама</p>
                  </div>
                </div>
                <div className="productinfo-cont-flex-right">
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Описание" key="1">
                      <div className="opis">
                        <p>Огромное описание товара в много строчек по этому этот текст я буду повторять. Огромное описание товара в много строчек по этому этот текст я буду повторять. Огромное описание товара в много строчек по этому этот текст я буду повторять. Огромное описание товара в много строчек по этому этот текст я буду повторять.</p>
                      </div>
                    </TabPane>
                    <TabPane tab="Характеристики" key="2">
                      <div className="xaracter">
                        <div className="xaracter-box">
                          <h4>Группа характеристик</h4>
                          <p> Название характеристики
                            <span>Значение</span>
                          </p>
                          <p> Название характеристики
                            <span>Значение</span>
                          </p>
                          <p> Название характеристики
                            <span>Значение</span>
                          </p>
                          <p> Название характеристики
                            <span>Значение</span>
                          </p>
                        </div>
                        <div className="xaracter-box">
                          <h4>Группа характеристик</h4>
                          <p> Название характеристики
                            <span>Значение</span>
                          </p>
                          <p> Название характеристики
                            <span>Значение</span>
                          </p>
                          <p> Название характеристики
                            <span>Значение</span>
                          </p>
                          <p> Название характеристики
                            <span>Значение</span>
                          </p>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tab="Отзывы" key="3">
                      <div className="otziv">
                        <div className="otziv-item">
                          <div className="otziv-item-photo">
                            <p>Фотографии и видео пользователей</p>
                            <div className="otziv-item-photo-flex">
                              <img src="/icons/Rectangle 11.png" />
                              <img src="/icons/Rectangle 11.png" />
                              <img src="/icons/Rectangle 11.png" />
                              <img src="/icons/Rectangle 11.png" />
                            </div>
                          </div>
                          <div className="otziv-item-user">
                            <div className="otziv-item-user-left">
                              <img src="/icons/user photo.png" />
                              <div className="otziv-item-user-left-text">
                                <p>Имя пользователя</p>
                                <div className="starts">
                                  <img src="/icons/star.svg" />
                                  <img src="/icons/star.svg" />
                                  <img src="/icons/star.svg" />
                                  <img src="/icons/star.svg" />
                                  <img src="/icons/star.svg" />
                                  <span>3.6</span>
                                </div>
                              </div>
                            </div>
                            <span>12.05.2021</span>
                          </div>
                          <p className="otzivtext">Скорее всего огромный текст отзыва, но это не точно.</p>
                          <p className="like">Достоинства:  <span>Отличный ноутбук</span></p>
                          <p className="dis">Недостатки:  <span>Быстро разряжается</span></p>
                          <div className="otzivbottom">
                            <a> Ответить
                              
                            </a>
                            <div className="otzivbottom-right">
                              <a>
                                <img src="/icons/fi-sr-thumbs-up.svg"/>
                                3
                              </a>
                              <a>
                                <img src="/icons/fi-sr-thumbs-down.svg"/>
                                0
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="otziv-item">
                          <div className="otziv-item-photo">
                            <p>Фотографии и видео пользователей</p>
                            <div className="otziv-item-photo-flex">
                              <img src="/icons/Rectangle 11.png" />
                              <img src="/icons/Rectangle 11.png" />
                              <img src="/icons/Rectangle 11.png" />
                              <img src="/icons/Rectangle 11.png" />
                            </div>
                          </div>
                          <div className="otziv-item-user">
                            <div className="otziv-item-user-left">
                              <img src="/icons/user photo.png" />
                              <div className="otziv-item-user-left-text">
                                <p>Имя пользователя</p>
                                <div className="starts">
                                  <img src="/icons/star.svg" />
                                  <img src="/icons/star.svg" />
                                  <img src="/icons/star.svg" />
                                  <img src="/icons/star.svg" />
                                  <img src="/icons/star.svg" />
                                  <span>3.6</span>
                                </div>
                              </div>
                            </div>
                            <span>12.05.2021</span>
                          </div>
                          <p className="otzivtext">Скорее всего огромный текст отзыва, но это не точно.</p>
                          <p className="like">Достоинства:  <span>Отличный ноутбук</span></p>
                          <p className="dis">Недостатки:  <span>Быстро разряжается</span></p>
                          <div className="otzivbottom">
                            <a> Ответить
                              
                            </a>
                            <div className="otzivbottom-right">
                              <a>
                                <img src="/icons/fi-sr-thumbs-up.svg"/>
                                3
                              </a>
                              <a>
                                <img src="/icons/fi-sr-thumbs-down.svg"/>
                                0
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
        </div>
    );
}
export default ProductInfo;
