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

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route path={'/index'} exact component={Index}></Route>
        <Route path={'/index2'} exact component={Index2}></Route>
        <Route path={'/about'} exact component={About}></Route>
        <Route path={'/pages1'} exact component={Pages}></Route>
        <Route path={'/cart'} exact component={Cart}></Route>
        <Route path={'/checkout'} exact component={Checkout}></Route>
        <Route path={'/contact'} exact component={Contact}></Route>
        <Route path={'/news'} exact component={News}></Route>
        <Route path={'/shop'} exact component={Shop}></Route>
        <Route path={'/fruit'} exact component={Fruit}></Route>
        <Route path={'/single-new'} exact component={Single_news}></Route>
        <Route path={'/single-product'} exact component={Single_product}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
