import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Blogdisplay from './components/Blogdisplay';

function App() {

  return (
    <div className="App">
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
