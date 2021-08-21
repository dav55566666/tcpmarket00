import {Fragment} from 'react';
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header/header';
import Oform from '../Components/oform';
import Line from '../public/icons/Line.svg';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <Oform />
      <Footer />
    </Fragment>
  );
}
