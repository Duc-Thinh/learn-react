import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopMenu from "./components/TopMenu.js"
import Products from "./pages/Products"

const Index = () => <h2>Home</h2>

function App () {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Route path="/" exact component={Index} />
        <Route path="/Products/" component={Products} />
      </div>
    </Router>
  );
}

export default App;
