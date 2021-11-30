import './App.css';
import React , {useState, useEffect}from 'react';
// Components
 import {Nav} from './Components/Nav/Nav.js'
 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Components/Views/Home';
import Cart from './Components/Views/Cart'
import ItemDetail from './Components/ItemDetail/ItemDetail'
import Cactus from './Components/Category/Cactus'
import Suculentas from './Components/Category/Suculentas'
import Macetas from './Components/Category/Macetas'

// Firebase

import { CartProvider } from './Components/Context/CartContext';

const App = () =>{
 
return(
  <CartProvider>
  <Router>
    <div className="App">
      <Nav></Nav>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Cart' exact component={Cart}/>
      <Route path='/Cactus' exact component={Cactus}/>
      <Route path='/Suculentas' exact component={Suculentas}/>
      <Route path='/Macetas' exact component={Macetas}/>
      <Route path="/ItemDetail/:id" component={ItemDetail} />
    </Switch>
    </div>

  </Router>
  </CartProvider>
)
}
export default App
  

  


