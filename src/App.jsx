import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import BusDetails from './Components/BusDetails';
import Navbar from './Components/CustomNavbar';
import Sidebar from './Components/Sidebar';


class App extends Component{
  render()
{  return (
    <Router>
      <div>
        <Navbar />    
        <Sidebar />
        <div class = "main">
        <Route exact path = "/" component={Home}/>       
        <Route path = "/busdetails" component={BusDetails}/>
        </div>
         
      </div>
    </Router>
  );
}
}

export default App;
