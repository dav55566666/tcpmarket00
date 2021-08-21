import {Fragment} from 'react';
import Footer from '../Components/Footer/footer';
import Headerwallet from '../Components/Headerwallet/header';
import Sotrud from '../Components/sotrud';

export default function Home() {
  return (
    <Fragment>
      <Headerwallet />
      <Sotrud />
      <Footer />
    </Fragment>
  );
}
