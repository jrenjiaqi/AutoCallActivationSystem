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
// import DeletePersonnel from "./DeletePersonnel";
 
export default function Main() {
  return (
      <HashRouter>
          <div>
          <h1>Auto Call Activation System</h1>
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