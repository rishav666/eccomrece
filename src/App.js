import logo from './logo.svg';
import {useEffect} from 'react'
import './App.css';
import {useDispatch} from 'react-redux'
import {product} from './action/product'

import Headerslider from './components/Headerslider';
import Head from './components/Head'
import Home from './components/Home'
import Cart from './components/Cart'
import {Provider} from "react-redux";
import Carddes from './components/body/Carddes'
import store from "./store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
    <div>
      <Router>
    <Head/>
<br/>
<br/>
    <Switch>
        <Route exact path="/" children={<Home/>}/>
          <Route exact path="/cart" children={<Cart/>}/>
        <Route exact path="/:id" children={<Carddes/>}/>


    </Switch>
        </Router>
    </div>
    </Provider>
  );
}

export default App;
