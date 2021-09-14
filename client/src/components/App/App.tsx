import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../redux/reducers'

import { fetchBoots } from '../../redux/actions/actions-fetch'
import Navbar from '../Navbar'
import Main from '../Main'
import ItemsList from '../ItemsList'
import Login from '../Login'
import Profile from '../Profile'
import Footer from '../Footer'
import Cart from '../Cart'
import ScrollUp from '../ScrollUp'
import './App.scss';

function App() {

  const dispatch = useDispatch()
  const { load: { boots } } = useTypedSelector(s => s)

  React.useEffect(() => {
    if (boots.length === 0) {
      console.log('fetch boots');
      dispatch(fetchBoots('/boots'))
    }
  }, []) // eslint-disable-line

  return (
    <Router >
      <Navbar />
      <ScrollUp />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/sneakers' component={ItemsList} />
        <Route path='/contacts' component={Footer} />
        <Route path='/cart' component={Cart} />
        <Route path='/register' component={Login} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
