import {Fragment} from 'react';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Charity from './Components/Charity';
import CharityCompany from './Components/CharityCompany';
import CharityCompanyItem from './Components/CharityCompany/item';
import Line from '../public/icons/Line.svg';
import Brendcrumbs from './Components/brendcruymbs';
export default function Home() {
  return (
    <Fragment>
      <Header />
      <Brendcrumbs backtext={"Назад"} />
      <Charity
        priceTop={"20 000 $"}
        opis={"Тут много, много описания которое ждится юехконечно. Тут много,Тут много,Тут много,Тут много, много описания которое ждится юехконечно. Тут много, много описания которое ждится юехконечно. Тут много, много описания которое ждится юехконечно. Тут много, много описания которое ждится юехконечно. Тут много, много описания которое ждится юехконечно. Тут много, много описания которое ждится юехконечно. Тут много, много описания которое ждится юехконечно. Тут много, много описания которое."}
        donation={"Ваше пожертвование"}
        donationtotal={"0 $"}
        collected={"Собрано"}
        collectedtotal={"10 000 $"}
        valyut={"Bitcoin"}
        valyutprice={"0.000000003"}
      />
      <CharityCompany>
        <CharityCompanyItem imgpath={"/icons/picture (1).png"} titlecompany={"Этому человеку нужна помощь в лечении"} needtocollect={"2 000 000 $"} collectedprice={"1 930 605 $"} />
        <CharityCompanyItem imgpath={"/icons/picture (1).png"} titlecompany={"Этому человеку нужна помощь в лечении"} needtocollect={"2 000 000 $"} collectedprice={"1 930 605 $"} />
        <CharityCompanyItem imgpath={"/icons/picture (1).png"} titlecompany={"Этому человеку нужна помощь в лечении"} needtocollect={"2 000 000 $"} collectedprice={"1 930 605 $"} />
        <CharityCompanyItem imgpath={"/icons/picture (1).png"} titlecompany={"Этому человеку нужна помощь в лечении"} needtocollect={"2 000 000 $"} collectedprice={"1 930 605 $"} />
      </CharityCompany>
      <Footer />
    </Fragment>
  );
}
