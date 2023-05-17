import React from "react";
import "../CSS/navbar.css";
import { Link } from "react-router-dom";
import search from "../assets/search.png";


export default function Navbar() {
  return (
    <div className="nav">
      <div className="left">
        <div className="link">
          <Link to="/" className="Company-Name">
            EDYODA
          </Link>
        </div>

        <div className="drop-1">
          <select className="dropdwn-1">
            <option value="course">Course</option>
          </select>
        </div>
        <div className="drop-1">
          <select className="dropdwn-2">
            <option value="program">Program</option>
          </select>
        </div>
      </div>
      <div className="right">
        <div className="search">
          <img src={search} />
        </div>
        <ul>
          <li className="login">Log in</li>
          <li className="join">Join Now</li>
        </ul>
      </div>
    </div>
  );
}
