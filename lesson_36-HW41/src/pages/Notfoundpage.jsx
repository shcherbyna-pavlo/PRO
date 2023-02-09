import React from "react";
import { Link } from "react-router-dom";

function Notfoundpage() {
   
  return (
    <div className="container">
      <p>Sorry, page not found</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Notfoundpage;
