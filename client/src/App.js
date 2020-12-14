import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Blogdisplay from './components/Blogdisplay';
import Navbar from './components/Navbar';
import Header from './components/Header';
//import StockMarket from '/StockMarket';

function App() {

  return (
    <div className="App">
     
      <Header/>
      <Navbar />
      <Router>
        <Link to='/'>Blogsdisplay</Link>
        <Switch>
          <Route exact path='/' component={Blogdisplay} /> {/*component={posts}*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
