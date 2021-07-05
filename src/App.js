import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './Main.js'
import ItemsList from './components/ItemsList'
import Video from './components/Video/Video.js'
import Footer from './components/Footer'

import './App.scss';



function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/sneakers' component={ItemsList} />
        <Route path='/contacts' component={Footer} />
        <Route path='/video' component={Video} />
      </Switch>

    </Router>
  );
}

export default App;
