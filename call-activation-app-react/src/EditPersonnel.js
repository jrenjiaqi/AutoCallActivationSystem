import React, { Component } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
 
export default function EditPersonnel() {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  // relevant info from the row user has selected to edit.
  const {state} = useLocation();
  const {in_id, in_name, in_desc, in_email} = state;

  // initialise hook values to info from selected row.
  React.useEffect(() => {
    // console.log(JSON.stringify(state));
    // // console.log(in_name);
    // // console.log(in_desc);
    // // console.log(in_email);
    setName(in_name);
    document.getElementById('formGroupNameInput').value = in_name;
    setDesc(in_desc);
    document.getElementById('formGroupDescInput').value = in_desc;
    setEmail(in_email);
    document.getElementById('exampleInputEmail').value = in_email;
  }, []);

  // send PATCH request to edit existing member.
  const handleClick = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.patch(
        `http://127.0.0.1:8000/api/v1/CallPersonnel/${in_id}/`,
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
      navigate("/");
    }
    
  }

  return (
    <div>
      <h3>Edit Personnel (ID: {in_id})</h3>
      <hr/>
      <form>
        <div class="form-group">
          <label for="formGroupNameInput">Name</label>
          <input 
            required="required"
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
            required="required"
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
            required="required"
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
        <button type="button" class="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}