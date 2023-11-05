import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "@mui/material/Button";
import Rate from "./Rate";
import Card from "./Card";

function Entry() {
  return (
    <div>
      
      <section className="hero">
        <div className="content">
          <h1>Welcome to Your Hostel Hub.</h1>
          <p> Find the best hostels for your next adventure</p>
          {/* <Button variant="contained" disableElevation>
      Disable elevation
    </Button> */}
          <Link to={"/hostels"}>Explore Hostels</Link>
        </div>
      </section>
      <Card />
      <Rate />
    </div>
    // </div>
  );
}

export default Entry;
