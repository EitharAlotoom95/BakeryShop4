import React, { Component } from 'react'

import Store from '../context/store'
import Cart from './Cart'
import login from './login'
import Signup from './signup'
import Categories from './categories'
import Category from './Category'

import ProductCategories from './home'

import Item from './admin'

import ButtonAppBar from './nav'

import Footer from './footer'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import CheckoutForm from "./checkOutForm";

import AboutOur from "./about";

import AboutLay from "./aboutLayOut";

class App extends Component {
  render() {
    return (
      <Store>
        <Router>
          <div>
            <ButtonAppBar />
            <Route path="/" exact component={ProductCategories} />
            <Route path="/login" exact component={login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/admin" exact component={Item} />
            <Route exact path="/categories" exact component={Categories} />
            <Route exact path="/categories/:category" exact component={Category} />
            <Route path="/cart" exact component={Cart} />
            
            <Route path="/about" exact component={AboutOur} />
            
            <Route path="/aboutLayOut" exact component={AboutLay} />

            <Route path="/CheckOutForm" exact component={CheckoutForm} />

            <Footer />
          </div>
        </Router>
      </Store>
    )
  }
}

export default App
