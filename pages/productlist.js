import {Fragment} from 'react';
import Footer from '../Components/Footer/footer';
import Headerwallet from '../Components/Headerwallet/header';
import ProfuctList from '../Components/productlist';
import Line from '../public/icons/Line.svg';
export default function Home() {
  return (
    <Fragment>
      <Headerwallet />
      <ProfuctList />
      <Footer />
    </Fragment>
  );
}
