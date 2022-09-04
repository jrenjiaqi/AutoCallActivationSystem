import React, { Component } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'
import {FiEdit} from "react-icons/fi"
import {RiDeleteBin5Line} from "react-icons/ri"
import { Navigate, useNavigate } from "react-router-dom";

const baseURL = "http://localhost:8000/api/v1/CallPersonnel/";
 
export default function AllPersonnel() {
  const [personnel, setPersonnel] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response)
      setPersonnel(response.data)
    })
  }, []);

  const handleEdit = (in_id, in_name, in_desc, in_email) => {
    console.log(in_id, in_name, in_desc, in_email);
    navigate("/EditPersonnel", { state: {in_id: in_id, in_name: in_name, in_desc: in_desc, in_email: in_email} });
  };
  
  const handleDelete = async (id) => {
    console.log(id);
    axios.delete(`http://localhost:8000/api/v1/CallPersonnel/${id}`)
        .then(response => console.log("Delete success!"))
        .catch(error => {
            console.error('There was an error!', error);
        });
    window.location.reload(false);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
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
                <td><FiEdit onClick={() => handleEdit(person.id, person.name, person.desc, person.email)}/></td>
                <td><RiDeleteBin5Line onClick={() => handleDelete(person.id)}/></td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}