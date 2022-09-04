import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/v1/CallPersonnel/";
 
export default function Home() {
  const [personnel, setPersonnel] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response)
      setPersonnel(response.data)
    })
  }, []);

  const JSONstring = JSON.stringify(personnel);

  return (
    <div>
      <h2>All Personnel on Activation</h2>
      <p>{JSONstring}</p>
      <p>^ There should be a JSON string above this message.</p>
    </div>
  );
}