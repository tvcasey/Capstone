import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Blogdisplay from './pages/Blogdisplay';
import AddPost from './pages/AddPost';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Reply from './pages/Reply';
//import StockMarket from '/StockMarket';

function App() {

  return (
    <div className="App">
      <Reply/>
      <AddPost/>
      <Blogdisplay/>
      <Header/>
      <Navbar />
          <Router>
            {/*<Blogdisplay path='/' />
            <AddPost path='/add' />
            <SignUp path='/signup' />
            <SignIn path='/signin' />*/}
            <Link to='/'>Blogsdisplay</Link>
            {/*<Link to='/add'>AddPost</Link>*/}
            <Switch>
              {/*<Route exact path='/' component={Blogdisplay} />*/}
              {/*<Route exact path='/add' component={AddPost} />*/}
            </Switch>
          </Router>
    </div>
  );
}

export default App;
