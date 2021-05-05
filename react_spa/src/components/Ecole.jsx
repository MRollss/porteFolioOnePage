import React, { Component } from "react";

import {
  NavLink,
} from "react-router-dom";
 
class Ecole extends Component {
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
        <div className="full_content">
          <div className="left_bar">
            <div className="small_bar bar"></div>
            <div className="small_bar bar"></div>
            <div className="small_bar bar"></div>
            <div className="long_bar bar"></div>
          </div>
          <div className="ecole_content">
            <div className="date"><h3 className="date_txt">2019 - Aujourd'hui</h3></div>
                <div className="ecole">
                  <h2>Etablissement supérieur - EFFICOM LILLE</h2>
                  <h3>Bachelor Digital</h3>
                </div>
          </div>
          <div className="ecole_content">
          <div className="date"><h3 className="date_txt">2018 - 2019</h3></div>
              <div className="ecole">
                <h2>Lycée - Saint rémi Roubaix</h2>
                <h3>BTS SIO (1 an de formation)</h3>
              </div>
          </div>
          <div className="ecole_content">
            <div className="date"><h3 className="date_txt">2015 - 2018</h3></div>
                <div className="ecole">
                  <h2>Lycée - EIC Tourcoing</h2>
                  <h3>Baccalauréat STI2D / Mention bien</h3>
                </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Ecole;