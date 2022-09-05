import React, { Component } from "react";

import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";

import AllPersonnel from "./AllPersonnel";
import AddPersonnel from "./AddPersonnel";
import EditPersonnel from "./EditPersonnel";
import { Button } from "bootstrap";
// import DeletePersonnel from "./DeletePersonnel";
 
export default function Main() {
  return (
    <HashRouter>
        <div className="outerTitleWrapper">
            <div className="titleWrapper">
                <div className="titleLeft"> <h1>Auto Call Activation System</h1> </div>
                <div className="titleRight"> 
                    <button id="sendEmailButton" type="button" class="btn btn-danger">Send Email To All</button> 
                </div>
            </div>
        </div>
        <div>
            <ul className="header">
                <li><NavLink exact to="/">View All</NavLink></li>
                <li><NavLink to="/AddPersonnel">Add New</NavLink></li>
            </ul>
            <div className="content">
                <Routes>
                    <Route path="/" element={<AllPersonnel />}/>
                    <Route path="/AddPersonnel" element={<AddPersonnel />}/>
                    <Route path="/EditPersonnel" element={<EditPersonnel />}/>
                </Routes>
            </div>
        </div>
    </HashRouter>
  );
}