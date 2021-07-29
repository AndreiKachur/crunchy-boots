import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar'
import Main from '../Main'
import ItemsList from '../ItemsList'
import Footer from '../Footer'
import Cart from '../Cart'
import ScrollUp from '../ScrollUp'


import './App.scss';

function App() {

  return (
    <Router >
      <Navbar />
      <ScrollUp />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/sneakers' component={ItemsList} />
        <Route path='/contacts' component={Footer} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
