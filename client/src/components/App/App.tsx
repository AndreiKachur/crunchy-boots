import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../redux/reducers'

import { fetchItems } from '../../redux/actions/actions-fetch'
import Navbar from '../Navbar'
import Main from '../Main'
import ItemsList from '../ItemsList'
import Login from '../Login'
import Profile from '../Profile'
import Footer from '../Footer'
import Cart from '../Cart'
import NotFound from './NotFound'
import ScrollUp from '../ScrollUp'
import './App.scss';

function App() {

  const dispatch = useDispatch()
  const { load: { boots } } = useTypedSelector(s => s)

  React.useEffect(() => {
    if (boots.length === 0) {
      dispatch(fetchItems('/boots'))
    }
  }, []) // eslint-disable-line

  return (
    <Router >
      <Navbar />
      <ScrollUp />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/sneakers' component={ItemsList} />
        <Route exact path='/contacts' component={Footer} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/register' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
