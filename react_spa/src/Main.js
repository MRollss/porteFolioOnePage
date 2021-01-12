import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "./Home";
import Ecole from "./Ecole";
import ExpPro from "./ExpPro";
import MesTravaux from "./MesTravaux";
import Competences from "./Competences";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div className="main">
                <section className="left">
                    <div className="name">
                        <NavLink to="/home">
                            <p>Antoine<br/>
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
                        <div className="info reseaux">
                            <h1>RETROUVEZ MOI SUR LES RESEAUX</h1>
                            <a href="facebook.com"><svg className="icon" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0-141.4-114.6-256-256-256s-256 114.6-256 256 114.6 256 256 256c1.5 0 3 0 4.5-.1v-199.2h-55v-64.1h55v-47.2c0-54.7 33.4-84.5 82.2-84.5 23.4 0 43.5 1.7 49.3 2.5v57.2h-33.6c-26.5 0-31.7 12.6-31.7 31.1v40.8h63.5l-8.3 64.1h-55.2v189.5c107-30.7 185.3-129.2 185.3-246.1z"/></svg>
                            </a>            
                            <a href="https://www.linkedin.com/in/antoinebocourt/" target="_blank" rel="noreferrer"><svg className="icon" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/></svg>
                            </a> 
                        </div>
                    </div>
                </section>
                <div id="menu" onClick={openMenu}>
                    <div id="burger">
                        <svg id="Mn_Burger" xmlns="http://www.w3.org/2000/svg" width="137" height="73" viewBox="0 0 137 73">
                            <rect id="Rectangle_8" data-name="Rectangle 8" width="137" height="11" fill="#fff"/>
                            <rect id="Rectangle_9" data-name="Rectangle 9" width="69" height="11" transform="translate(68 31)" fill="#fff"/>
                            <rect id="Rectangle_10" data-name="Rectangle 10" width="69" height="11" transform="translate(68 62)" fill="#fff"/>
                        </svg>
                    </div>
                    <nav className="selection">
                        <ul className="header">
                            <div className="cat ecole">
                                <li><NavLink to="/ecole">écoles</NavLink></li>
                            </div>
                            <div className="cat expPro">
                                <li><NavLink to="/expPro">expériences professionelles</NavLink></li>
                            </div>
                            <div className="cat mesTravaux">
                                <li><NavLink to="/mesTravaux">mes travaux</NavLink></li>
                            </div>
                            <div className="cat competence">
                                <li><NavLink to="/competence">compétences</NavLink></li>
                            </div>
                        </ul>
                    </nav>
                </div>
                <div className="content">
                    <Route path="/home" component={Home}/>
                    <Route path="/ecole" component={Ecole}/>
                    <Route path="/expPro" component={ExpPro}/>
                    <Route path="/mesTravaux" component={MesTravaux}/>
                    <Route path="/competence" component={Competences}/>
                </div>
        </div>
        </HashRouter>
    );
  }
}
function openMenu(){
    console.log('hello');
}
const styles = {};

styles.open = {
    position: "fixed",
    right: 0,
    backgroundcolor: "#37474F",
    width: "1190px",
    top: 0
};

styles.close = {
    position: "fixed",
    right: 0,
    backgroundcolor: "#37474F",
    width: "275px",
    top: 0
};
export default Main;