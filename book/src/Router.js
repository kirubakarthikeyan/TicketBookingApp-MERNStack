import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Seats from './pages/Seats';
import {BrowserRouter,Route} from 'react-router-dom';


class Router extends Component {
  render() {
    return (
     <BrowserRouter>
     <div>
       <Route exact path="/" component={Home}/>
       <Route path="/:id" component={Seats}  />
     </div>
     </BrowserRouter>
    );
  }
}

export default Router;
