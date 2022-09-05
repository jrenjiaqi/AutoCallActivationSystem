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
                <div className="titleLeft"> <h2>Auto Call Activation System</h2> </div>
                <div className="titleRight">
                    <a href="/send/email" id="sendEmailButton" role="button" class="btn btn-danger">Send Email To All</a> 
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