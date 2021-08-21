import {Fragment} from 'react';
import Footer from '../Components/Footer/footer';
import Headerwallet from '../Components/Headerwallet/header';
import Verifik from '../Components/verifik';
import Line from '../public/icons/Line.svg';
import Walletmodal from "../modals/walletmodal"
export default function Home() {
  return (
    <Fragment>
      <Walletmodal />
      <Headerwallet />
      <Verifik />
      <Footer />
    </Fragment>
  );
}
