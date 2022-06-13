import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Router, Switch } from 'react-router-dom';
import Index from './containers/Index/Index';
import Index2 from './containers/Index2/Index2';
import About from './containers/About/About';
import Pages from './containers/Pages-404/Pages';

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route path={'/index'} exact component={Index}></Route>
        <Route path={'/index2'} exact component={Index2}></Route>
        <Route path={'/about'} exact component={About}></Route>
        <Route path={'/pages1'} exact component={Pages}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
