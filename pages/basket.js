import {Fragment} from 'react';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Basket from './Components/basket';
import BasketItem from './Components/basket/item';
import Line from '../public/icons/Line.svg';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <Basket>
        <BasketItem imgPath={"/icons/laptop (1).png"} productname={"Ноутбук LENOVO IdeaPad Flex 5 14 Platinum Gray (81X100NNRA)"} productcolor={"Черный"} productcomplect={"Intel Core i7"} productstatus={"125 шт."} price1={"USD 320,00"} price2={"TCP Credit 24,00000000"}/>
      </Basket>
      <Footer />
    </Fragment>
  );
}
