import '../styles/globals.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/media.css';
import '../styles/form.css';
import '../styles/global.sass';
import './Components/brendcruymbs/_styles.css';
import './Components/product/_styles.css';
import './Components/basket/_styles.css';
import './Components/market/_styles.css';
import './Components/Charity/style.css';
import './Components/blog/style.css';
import './Components/charityhome/style.css';
function MyApp({Component, pageProps}) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
