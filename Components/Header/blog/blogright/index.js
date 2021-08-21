import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu className="sort">
    <Menu.Item>
      <p>по дате публикации</p>
    </Menu.Item>
    <Menu.Item>
      <p>по популярности</p>
    </Menu.Item>
  </Menu>
);

const Blogright = ({children}) => {
    return (
      <div className="blog-cont-flex-right">
        <h4>Сортировка <Dropdown overlay={menu}><div><span>по дате публикации </span><img src="/icons/arrowdown.svg" /></div></Dropdown></h4>
        <div className="blog-cont-flex-right-int">
          {children}
        </div>
      </div>
    );
}
export default Blogright;
