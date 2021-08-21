import {Fragment} from 'react';
import Footer from '../Components/Footer/footer';
import Headerwallet from '../Components/Headerwallet/header';
import WalletStories from '../Components/walletstories';
import Line from '../public/icons/Line.svg';
import Walletmodal from "../modals/walletmodal"
export default function Home() {
  return (
    <Fragment>
      <Walletmodal />
      <Headerwallet />
      <WalletStories />
      <Footer />
    </Fragment>
  );
}
