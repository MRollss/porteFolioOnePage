import React, { Component } from "react";

import {
  NavLink,
} from "react-router-dom";
 
class ExpPro extends Component {
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
          <div className="expPro_content">
          <div className="date"><h3 className="date_txt">Mai - Juin 2020</h3></div>
              <div className="expPro">
                <h2>Kreatic / Roncq</h2>
                <h3>Expérience en Intégration web</h3>
                <p>HTML / CSS sur CMS</p>
              </div>
              <div className="date"><h3 className="date_txt">Juin - Juillet 2019</h3></div>
              <div className="expPro">
                <h2>BLM Technologies</h2>
                <h3>Expérience en Développement et Design logo</h3>
                <p>Réseaux informatique / installation Hardware / PHP / Graphisme</p>
              </div>
              <div className="date"><h3 className="date_txt">Avril - Mai 2016</h3></div>
              <div className="expPro">
                <h2>TMLS Technologies</h2>
                <h3>Expérience en réseaux informatique</h3>
                <p>Réseaux informatique / Configuration Rooter</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default ExpPro;