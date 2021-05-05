import React, { Component } from "react";

import {
  NavLink,
} from "react-router-dom";

import '../styles/graph.scss';

class Competences extends Component {
  render() {
    return (
      <div>
        <div className="menu">
        <NavLink to="/Menu/OpenMenu">
            <div className="toggle-button close">
                <div className="line l1"></div>
                <br></br>
                <div className="line l2"></div>
                <br></br>
                <div className="line l3"></div>
            </div>
        </NavLink>
        </div>
        <div className="full_content graphs">
          <h3>HTML</h3>
          <div className="Graph html"></div>
          <h3>CSS</h3>
          <div className="Graph css"></div>
          <h3>JAVA SCRIPT</h3>
          <div className="Graph js"></div>
          <br></br>
          <h3>PHOTOSHOP</h3>
          <div className="Graph photoshop"></div>
          <h3>ILLUSTRATOR</h3>
          <div className="Graph illustrator"></div>
          <h3>XD</h3>
          <div className="Graph xd"></div>
        </div>
      </div>
    );
  }
}
 
export default Competences;