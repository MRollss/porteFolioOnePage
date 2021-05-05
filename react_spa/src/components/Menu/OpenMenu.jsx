import React, { Component } from "react";
import './OpenMenu.scss';
import './menu.scss';

import {
    NavLink,
  } from "react-router-dom";

  class OpenMenu extends Component {
    render() {
      return (
    <div className="openMenu">
           <div className="maTete"></div>
    <div className="drawer">
        <NavLink to="/home">
            <div className="toggle-button open">
                <div className="line l1"></div>
                <br></br>
                <div className="line l2"></div>
                <br></br>
                <div className="line l3"></div>
            </div>
        </NavLink>
            <nav className="selection">
                <ul className="header">
                    <NavLink to="/ecole">
                        <div className="cat">
                            <li>écoles</li>
                        </div>
                    </NavLink>
                    <NavLink to="/expPro">
                        <div className="cat">
                            <li>expériences professionelles</li>
                        </div>
                    </NavLink>
                    <NavLink to="/mesTravaux">
                        <div className="cat">
                            <li>mes travaux</li>
                        </div>
                    </NavLink>
                    <NavLink to="/competence">
                        <div className="cat">
                            <li>compétences</li>
                        </div>
                    </NavLink>
                </ul>
            </nav>
        </div>
    </div>
    )
    }
}

export default OpenMenu;