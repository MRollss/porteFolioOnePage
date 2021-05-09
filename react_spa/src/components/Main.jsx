import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Redirect
  } from "react-router-dom";
import Home from "./Home";
import Ecole from "./Ecole";
import ExpPro from "./ExpPro";
import MesTravaux from "./MesTravaux";
import Competences from "./Competences";

import OpenMenu from "./Menu/OpenMenu";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div className="main">
                <section className="left">
                    <div className="name">
                    <NavLink to="/home"><p>Antoine<br/>
                     Bocourt</p>
                     </NavLink>
                    </div>
                    <div className="contact">
                        <div className="info mail">
                            <h1>Email</h1>
                            <p>antbocourt@gmail.com</p>
                        </div>
                        <div className="info tel">
                            <h1>Telephone</h1>
                            <p>07.81.02.81.13</p>
                        </div>
                        <div className="info reseaux contact_right">
                            <h1>RETROUVEZ MOI SUR linkedin</h1>          
                            <a href="https://www.linkedin.com/in/antoinebocourt/" target="_blank" rel="noreferrer"><svg className="icon" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/></svg>
                            </a> 
                        </div>
                    </div>
                </section>
                <div class="menu">
                    <NavLink to="/Menu/OpenMenu">
                        <div className="toggle-button">
                            <div className="line l1"></div>
                            <br></br>
                            <div className="line l2"></div>
                            <br></br>
                            <div className="line l3"></div>
                        </div>
                    </NavLink>
                </div>
                <div className="content">
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/home" component={Home}/>
                    <Route path="/ecole" component={Ecole}/>
                    <Route path="/expPro" component={ExpPro}/>
                    <Route path="/mesTravaux" component={MesTravaux}/>
                    <Route path="/competence" component={Competences}/>
                    <Route path="/Menu/OpenMenu" component={OpenMenu}/>
                </div>
        </div>
        </HashRouter>
    );
  }
}
export default Main;
