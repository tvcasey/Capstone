import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Blogdisplay from './pages/Blogdisplay';
import AddPost from './pages/AddPost';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';
import Nav from 'react-bootstrap/Nav';
import Header from './components/Header';
import Reply from './pages/Reply';
import IncomeStatement from './components/IncomeStatement';
import BalanceSheet from './components/BalanceSheet';
import CashFlows from './components/CashFlows';
import ModalChart from './components/ModalChart';
import FinancialChart from './components/FinancialChart';
import Main from './pages/Main';
//import DeletePost from './components/DeletePost';
//import { Line } from 'react-chartjs-2';
import FinancialStatements from './pages/FinancialStatements';

//const ThemeContext = React.createContext('light');

function App(props) {

  return (
    <div className="App">
      {/*<Reply/>*/}
      {/* <AddPost/> */}
      {/*<ThemeContext.Provider value='dark'>*/}
      {/*<IncomeStatement/>*/}
      {/*</ThemeContext.Provider>*/}
      {/*<BalanceSheet/><CashFlows/>*/}
      
      <Header/>
      <Navbar />
      <ModalChart/>
      <Blogdisplay/>
      {/*<FinancialStatements />*/}
      {/*<SignIn />*/}
      {/*<SignUp />*/}
      <Main />
      
      {/*<FinancialChart/>*/}      
          
    </div>
  );
}

export default App;
