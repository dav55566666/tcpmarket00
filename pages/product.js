import {Fragment} from 'react';
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header/header';
import Brendcrumbs from '../Components/brendcruymbs';
import Product from '../Components/product';
import TopProduct from '../Components/topproducts';
import TopProductItem from '../Components/topproducts/item';
import ProductInfo from '../Components/productinfo';
import BrendcrumbsItem from '../Components/brendcruymbs/item';
import Line from '../public/icons/Line.svg';
export default function Home() {
  return (
    <Fragment>
      <Header />

        <Brendcrumbs backtext={"Назад в каталог"} location={"Lenovo"}>
          <BrendcrumbsItem nexttext={"Ноутбуки и компьютеры"} />
          <BrendcrumbsItem nexttext={"Ноутбуки"} />
          <BrendcrumbsItem nexttext={"Lenovo"} />
        </ Brendcrumbs>
        <Product price={"128"} productname={"Название товара жирным шрифтом. Может быть в две строки а может быть и в три=, но это не важно."} />
        <ProductInfo />
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
      <Footer />
    </Fragment>
  );
}
