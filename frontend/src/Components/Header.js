import React from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Header() {
  return (
    <>
      <nav>
        <div className="logo">Test.</div>
        <ul>
          <li>
            <NavLink className="Nav_link" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="Nav_link" exact to="/new">
              Our Products
            </NavLink>
          </li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
          <button class="button"><AccountCircleIcon /> <NavLink className="loginbtn" exact to="/Login">
              Sign In
            </NavLink></button>
        <div>
          <i className="fa fa-search"></i>
          <i className="fa fa-shopping-basket"></i>
        </div>
      </nav>
    </>
  );
}
