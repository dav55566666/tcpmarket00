import React from 'react';
import Login from './Login/login';
import Laptop from '../../../public/icons/laptop.svg';
import AddCorz from '../../../public/icons/add.svg';
import TopProduct from '..//topproducts';
import TopProductItem from '..//topproducts/item';
import LeftPanel from './LeftPanel/leftPanel';
import CenterSection from './CenterSection/centerSection';
import UserIncome from './UserIncome/userIncome';
import GoodServices from './GoodsServices/goodServices';
import Line from '../../../public/icons/Line.svg';
import Auction from '../../../public/icons/auction.svg';

class Main extends React.Component {
  render() {
    return (
      <main>
        <section className="grid-section">
          <LeftPanel />
          <CenterSection />
          <Login />
        </section>
        <div className="static-sections">
          <div className="static-sections-list">
            <UserIncome />
            <GoodServices />
            <UserIncome />
          </div>
        </div>
        <TopProduct>
          <TopProductItem imgPath={"/icons/laptop.png"} titleprod={"Название товара с местом пожд две строки"} price1={"Цена в нац. валюте"} price2={"Цена в TPC Credit"} />
          <TopProductItem imgPath={"/icons/laptop.png"} titleprod={"Название товара с местом пожд две строки"} price1={"Цена в нац. валюте"} price2={"Цена в TPC Credit"} />
          <TopProductItem imgPath={"/icons/laptop.png"} titleprod={"Название товара с местом пожд две строки"} price1={"Цена в нац. валюте"} price2={"Цена в TPC Credit"} />
          <TopProductItem imgPath={"/icons/laptop.png"} titleprod={"Название товара с местом пожд две строки"} price1={"Цена в нац. валюте"} price2={"Цена в TPC Credit"} />
          <TopProductItem imgPath={"/icons/laptop.png"} titleprod={"Название товара с местом пожд две строки"} price1={"Цена в нац. валюте"} price2={"Цена в TPC Credit"} />
          <TopProductItem imgPath={"/icons/laptop.png"} titleprod={"Название товара с местом пожд две строки"} price1={"Цена в нац. валюте"} price2={"Цена в TPC Credit"} />
          <TopProductItem imgPath={"/icons/laptop.png"} titleprod={"Название товара с местом пожд две строки"} price1={"Цена в нац. валюте"} price2={"Цена в TPC Credit"} />
          <TopProductItem imgPath={"/icons/laptop.png"} titleprod={"Название товара с местом пожд две строки"} price1={"Цена в нац. валюте"} price2={"Цена в TPC Credit"} />
        </TopProduct>
      </main>
    );
  }
}

export default Main;
