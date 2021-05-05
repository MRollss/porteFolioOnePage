import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import '../styles/MesTravaux.scss';

class MesTravaux extends Component {
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
          <div className="liens">
              <a className="lien_cat" href="src/components/Travaux/maquettesWeb.html">Maquettes web</a>
              <a className="lien_cat" href="maquettesMobile.html">Maquettes mobile</a>
              <a className="lien_cat" href="BanniereWeb.html">Bannières web</a>
          </div>

        </div>
      </div>
    );
  }
}
 
export default MesTravaux;