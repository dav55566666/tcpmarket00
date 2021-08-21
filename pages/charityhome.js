import {Fragment} from 'react';
import Footer from '../Components/Footer/footer';
import Header from '../Components/Header/header';
import CharityCompanyHome from '../Components/CharityCompanyhome';
import CharityCompanyItemHome from '../Components/CharityCompanyhome/item';
import CharityHome from '../Components/Charityhome';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <CharityHome />
      <CharityCompanyHome>
        <CharityCompanyItemHome imgpath={"/icons/picture (1).png"} titlecompany={"Этому человеку нужна помощь в лечении"} needtocollect={"2 000 000 $"} collectedprice={"1 930 605 $"} />
        <CharityCompanyItemHome imgpath={"/icons/picture (1).png"} titlecompany={"Этому человеку нужна помощь в лечении"} needtocollect={"2 000 000 $"} collectedprice={"1 930 605 $"} />
        <CharityCompanyItemHome imgpath={"/icons/picture (1).png"} titlecompany={"Этому человеку нужна помощь в лечении"} needtocollect={"2 000 000 $"} collectedprice={"1 930 605 $"} />
        <CharityCompanyItemHome imgpath={"/icons/picture (1).png"} titlecompany={"Этому человеку нужна помощь в лечении"} needtocollect={"2 000 000 $"} collectedprice={"1 930 605 $"} />
        <CharityCompanyItemHome imgpath={"/icons/picture (1).png"} titlecompany={"Этому человеку нужна помощь в лечении"} needtocollect={"2 000 000 $"} collectedprice={"1 930 605 $"} />
        <CharityCompanyItemHome imgpath={"/icons/picture (1).png"} titlecompany={"Этому человеку нужна помощь в лечении"} needtocollect={"2 000 000 $"} collectedprice={"1 930 605 $"} />
      </CharityCompanyHome>
      <Footer />
    </Fragment>
  );
}
