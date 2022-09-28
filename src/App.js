import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Router, Switch } from 'react-router-dom';
import Index from './containers/Index/Index';
import Index2 from './containers/Index2/Index2';
import About from './containers/About/About';
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
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react'
import WinterFruites from './containers/Categories/WinterFruites';
import SpringFruites from './containers/Categories/SpringFruites';
import SummerFruits from './containers/Categories/SummerFruits';
import FallFruits from './containers/Categories/FallFruits';
import AllSeason from './containers/Categories/AllSeason';

//adminpanel
import Layout from './admin/components/layout/Layout';
import Product from './admin/containers/product/Product';
import Counter from './admin/containers/Counter/Counter';
import Category from './admin/containers/Category/Category';
import { persistor, store } from './redux/store';
import SeasonWise from './containers/Categories/SeasonWise';


function App() {

  return (

    <div >
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <ToggleContext>
            <PersistGate loading={null} persistor={persistor}>
              <Header />
              <Switch>
                <Publicroute path={'/'} exact component={Index} />
                <Publicroute path={'/index'} exact component={Index} />
                <Publicroute path={'/index2'} exact component={Index2} />
                <Publicroute path={'/about'} exact component={About} />
                <Publicroute path={'/checkout'} exact component={Checkout} />
                <Publicroute path={'/contact'} exact component={Contact} />
                <Publicroute path={'/news'} exact component={News} />
                <Publicroute path={'/shop'} exact component={Shop} />
                <Publicroute path={'/fruit'} exact component={Fruit} />
                <Publicroute path={'/single-new'} exact component={Single_news} />
                <Publicroute path={'/single-product'} exact component={Single_product} />
                <Publicroute path={'/search'} exact component={Search} />
                <Publicroute path={'/login-signup'} exact restricted={true} component={Login_signup} />
                <Privateroute path={'/cart'} exact component={Cart} />
                <Publicroute path={'/winter-fruits'} exact component={WinterFruites} />
                <Publicroute path={'/spring-fruits'} exact component={SpringFruites} />
                <Publicroute path={'/summer-fruits'} exact component={SummerFruits} />
                <Publicroute path={'/fall-fruits'} exact component={FallFruits} />
                <Publicroute path={'/allseason-fruits'} exact component={AllSeason} />
                <Publicroute path={'/season-fruits'} exact component={SeasonWise} />

                {/* adminpanel */}
                <Layout >
                  <Switch>
                    <Route path={'/product'} exact component={Product}></Route>
                    <Route path={'/category'} exact component={Category}></Route>
                    <Route path={'/counter'} exact component={Counter}></Route>
                  </Switch>
                </Layout>
              </Switch>
              <Footer />
            </PersistGate>
          </ToggleContext>
        </Provider>
      </SnackbarProvider>

    </div>
  );
}

export default App;
