import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import './CustomNavbar.css';

export default class customNavbar extends Component {
    render() {
        return (
            <div class="main">
            <nav class="navbar navbar-expand-sm bg-dark"> 
                <Nav.Link href="/"><button class="btn"><i class="fa fa-bus"></i></button></Nav.Link>
                From:<input id="From"/>
                {/* <button class="btn"><i class="fa fa-bus"></i></button> */}
                To:<input id = "To"/>
                {/* <ul class="navbar-nav ml-auto">
                    <li  class ="nav-item"><Nav.Link href="/">Query</Nav.Link></li>
                    <li  class ="nav-item"><Nav.Link href="/busdetails">BusDetails</Nav.Link></li>
                    <li  class ="nav-item"><Nav.Link href="/">Search Buses</Nav.Link></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">Settings</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="/">Profile</a>
                        <a class="dropdown-item" href="/">Contact Us</a>
                        </div>
                    </li>
                </ul>  */}
            </nav> 
            </div>
        )
    }
}