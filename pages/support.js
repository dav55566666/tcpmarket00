import {Fragment} from 'react';
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header/header';
import Support from '../Components/support';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <Support />
      <Footer />
    </Fragment>
  );
}
