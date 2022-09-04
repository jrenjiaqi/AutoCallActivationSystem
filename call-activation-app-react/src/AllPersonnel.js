import React, { Component } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'

const baseURL = "http://127.0.0.1:8000/api/v1/CallPersonnel/";
 
export default function AllPersonnel() {
  const [personnel, setPersonnel] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response)
      setPersonnel(response.data)
    })
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            personnel.map((person) => 
              <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.desc}</td>
                <td>{person.email}</td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}