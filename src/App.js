import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Router, Switch } from 'react-router-dom';
import Index from './containers/Index/Index';
import Index2 from './containers/Index2/Index2';
import About from './containers/About/About';
import Pages from './containers/Pages-404/Pages';
import Cart from './containers/Cart/Cart';
import Checkout from './containers/Checkout/Checkout';
import Contact from './containers/Contact/Contact';
import News from './containers/News/News';
import Shop from './containers/Shop/Shop';
import Single_news from './containers/Single-news/Single_news';
import Single_product from './containers/Single-product/Single_product';
import Fruit from './containers/Fruit/Fruit';
import Login_signup from './containers/Login_signup/Login_signup';
import Publicroute from './Route/Publicroute';
import Privateroute from './Route/Privateroute';
import Search from './containers/search/Search';
import ToggleContext from './context/ThemeContext';

function App() {
  return (
    <div >
      <ToggleContext>
        <Header />
        <Switch>
          <Publicroute path={'/'} exact component={Index} />
          <Publicroute path={'/index'} exact component={Index} />
          <Publicroute path={'/index2'} exact component={Index2} />
          <Publicroute path={'/about'} exact component={About} />
          <Publicroute path={'/pages1'} exact component={Pages} />
          <Publicroute path={'/checkout'} exact component={Checkout} />
          <Publicroute path={'/contact'} exact component={Contact} />
          <Publicroute path={'/news'} exact component={News} />
          <Publicroute path={'/shop'} exact component={Shop} />
          <Publicroute path={'/fruit'} exact component={Fruit} />
          <Publicroute path={'/single-new'} exact component={Single_news} />
          <Publicroute path={'/search'} exact component={Search} />
          <Publicroute path={'/login-signup'} exact restricted={true} component={Login_signup} />
          <Privateroute path={'/cart'} exact component={Cart} />
        </Switch>
        <Footer />
      </ToggleContext>
    </div>
  );
}

export default App;
