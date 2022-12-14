import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login';
import Header from "./components/header/Header";
import ApplyLoan from './ApplyLoan';
import Dashboard from './Dashboard';
import Register from './Register';
import LoanCardsAvailed from './LoanCardsAvailed';
import ItemsPurchased from './ItemsPurchased';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      page: [],
      dashboard: []
    }
  }
  render() {
    return (
      <div className="App">

        <BrowserRouter>
        
          <Header title="Loan User Management Application" />
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route path="/register" element={<Register />} ></Route>
            <Route path="/applyloan" element={<ApplyLoan />} ></Route>
            <Route path="/home" element={<Dashboard />} ></Route>
            <Route path="/loans" element={<LoanCardsAvailed />} ></Route>
            <Route path="/items" element={<ItemsPurchased />} ></Route>
          </Routes>
          

        </BrowserRouter>
      </div>
    );
  }
}

export default App;