import React, {Component} from 'react';
import  { Link } from 'react-router-dom';
import {  Jumbotron, Button} from 'react-bootstrap';
import './Home.css';

export default class BusDetails extends Component {
    render() {
        return (
            <div>
               <div id="exTab2" class="container">	
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#1" data-toggle="tab">Overview</a></li>
                        <li><a href="#2" data-toggle="tab">Without clearfix</a></li>
                        <li><a href="#3" data-toggle="tab">Solution</a></li>
                    </ul>

                    <div class="tab-content ">
                        <div class="tab-pane active" id="1">
                            <h3>Standard tab panel created on bootstrap using nav-tabs</h3>
                        </div>
                        <div class="tab-pane" id="2">
                            <h3>Notice the gap between the content and tab after applying a background color</h3>
                        </div>
                        <div class="tab-pane" id="3">
                            <h3>add clearfix to tab-content (see the css)</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}