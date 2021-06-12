import {Fragment} from 'react';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Blog from './Components/blog';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <Blog />
      <Footer />
    </Fragment>
  );
}
