import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";

class Home extends Component {
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
        <section className="container">
        <ul>
            <li>web designer</li>
            <li>Intégrateur</li>
            <li>Front</li>
        </ul>
        <button className="btn"><a href="https://drive.google.com/file/d/1aDSrQfA5ArCIPZ0HeYj0MSQ1IHDxwP6T/view?usp=sharing" target="_blank" rel="noreferrer">Télécharger mon CV (PDF)</a></button> 
    </section>
    </div>
    );
    
  }
}
 
export default Home;
