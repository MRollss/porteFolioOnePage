import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import '../styles/MesTravaux.scss';

import appfood1 from '../assets/Travaux/appfood/appfood-1.png';
import appfood2 from '../assets/Travaux/appfood/appfood-2.png';
import appfood3 from '../assets/Travaux/appfood/appfood-3.png';
import appfood4 from '../assets/Travaux/appfood/appfood-4.png';

import zao1 from '../assets/Travaux/Zaowebdesign/Zaowebdesign-1.png';
import zao2 from '../assets/Travaux/Zaowebdesign/Zaowebdesign-2.png';
import zao3 from '../assets/Travaux/Zaowebdesign/Zaowebdesign-3.png';
import zao4 from '../assets/Travaux/Zaowebdesign/Zaowebdesign-4.png';
import zao5 from '../assets/Travaux/Zaowebdesign/Zaowebdesign-5.png';
import zao6 from '../assets/Travaux/Zaowebdesign/Zaowebdesign-6.png';

import logoBrocaou from '../assets/Travaux/Brocaou/logosBrocaou.png';

import SeanBin from '../assets/Travaux/SeanBin/SeanBin Project.jpg';

import Disney from '../assets/Travaux/NewsletterDisney.jpg';

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
        <div className="full_content_travaux">
          <div className="travaux">
              <div  className="lien_cat"><a href="https://drive.google.com/file/d/1AZhxM7VYNGovpenVr9iy3M-p1qSQUCRr/view?usp=sharing">FoodApp</a></div>
                <div className="img_travaux appfood">
                  <img src={appfood1}></img>
                  <img src={appfood2}></img>
                  <img src={appfood3}></img>
                  <img src={appfood4}></img>
                </div>
              <div className="lien_cat"><a href="https://drive.google.com/file/d/1rFnpxudYeswkrBqZmVNt8j_Xdy-N7Gu5/view?usp=sharing">Zao Makeup</a></div>
              <div className="img_travaux zao">
                  <img src={zao1}></img>
                  <img src={zao2}></img>
                  <img src={zao3}></img>
                  <img src={zao4}></img>
                  <img src={zao5}></img>
                  <img src={zao6}></img>
                </div>
              <div className="lien_cat"><a href="https://www.brocaou.com/" target="_blank">Brocaou - Visitez Brocaou.com</a></div>
              <div className="img_travaux brocaou">
                  <img src={logoBrocaou}></img>
              </div>
              <div className="lien_cat"><a href="https://drive.google.com/file/d/1KA7S2L4Op9-wp5Blj9zJ-ZFoYAydqRAh/view?usp=sharing" target="_blank">SeanBin Project</a></div>
              <div className="img_travaux SeanBin">
                  <img src={SeanBin}></img>
              </div>
              <div className="lien_cat"><a href="https://drive.google.com/file/d/17h1bzM4ovjMuf1TBZYYxHb2MJvIcEXYQ/view?usp=sharing" target="_blank">Newsletter Disney</a></div>
              <div className="img_travaux disney">
                  <img src={Disney}></img>
              </div>
              <button className="btn"><a href="https://drive.google.com/drive/folders/1O9qsOOZVf2eW7kPr6inzaC372seLCq1m?usp=sharing" target="_blank" >Voir d'autre travaux</a></button> 
          </div>
        </div>
      </div>
    );
  }
}
 
export default MesTravaux;