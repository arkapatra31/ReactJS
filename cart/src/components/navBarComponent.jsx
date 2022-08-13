import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light" style={{color:'#9AFC79'}} >
        <span className="navbar-text">
          <i className="bi bi-bag" style={{fontSize:20}}></i>
        </span>
      </nav>
    );
  }
}

export default NavBar;
