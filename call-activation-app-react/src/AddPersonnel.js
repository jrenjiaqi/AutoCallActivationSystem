import axios from "axios";
import React, { Component } from "react";
 
export default function AddPersonnel() {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  // send POST request to add new member.
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.post(
        'http://127.0.0.1:8000/api/v1/CallPersonnel/',
        {name: name, desc: desc, email: email},
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
    }
    catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h3>Add New Personnel</h3>
      <hr/>
      <form>
        <div class="form-group">
          <label for="formGroupNameInput">Name</label>
          <input 
            type="text" 
            class="form-control" 
            id="formGroupNameInput" 
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <br/>
        <div class="form-group">
          <label for="formGroupDescInput">Description</label>
          <input 
            type="text" 
            class="form-control" 
            id="formGroupDescInput" 
            placeholder="Description"
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <br/>
        <div class="form-group">
          <label for="exampleInputEmail">Email address</label>
          <input 
            type="email" 
            class="form-control" 
            id="exampleInputEmail" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted">Notification Email Will Be Sent to This Email.</small>
          <br/>
        </div>
        <br/>
        <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}