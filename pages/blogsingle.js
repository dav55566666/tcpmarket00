import {Fragment} from 'react';
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header/header';
import Blogsingle from '../Components/blogsinggle';
import Brendcrumbs from '../Components/brendcruymbs';
import BrendcrumbsItem from '../Components/brendcruymbs/item';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <Brendcrumbs backtext={"Назад"} location={'Люди'}>
        <BrendcrumbsItem nexttext={"Форум"} />
      </Brendcrumbs>
      <Blogsingle data={"21 Сентября 2021"} viev={"123"} />
      <Footer />
    </Fragment>
  );
}
