import React, { Component } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import { Link } from "react-router-dom";

import Changhong from "../img/changhong.jpg";
import LG from "../img/lg.jpg";
import Aqua from "../img/aqua.jpg";
import Midea from "../img/midea.jpg";
import Polytron from "../img/polytron.jpg";
import Samsung from "../img/samsung.jpg";
import Sharp from "../img/sharp.jpg";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="line-height-1 mt-5 mb-3">
              Welcome to <br />
              Tita's AC Store<br />
            </h1>
            <p
              className="mb-4 font-weight-light w-75"
              style={{ lineHeight: "170%" }}
            >
              Hanya disini tempat jual beli AC termurah ! <br /> Yuk beli sekarang sebelum kehabisan, kapan lagi dapat harga murah dan kualitas terjamin 
            </p>
          </div>

          <div className="col-6 pl-5">
              <Carousel>
                  <div>
                      <img src={Changhong}/>
                      <p>Changhong AC</p>
                  </div>
                  <div>
                      <img src={LG}/>
                      <p>LG AC</p>
                  </div>
                  <div>
                      <img src={Samsung}/>
                      <p>Samsung AC</p>
                  </div>
                  <div>
                      <img src={Aqua}/>
                      <p>AQUA AC</p>
                  </div>
                  <div>
                      <img src={Polytron}/>
                      <p>Polytron AC</p>
                  </div>
                  <div>
                      <img src={Midea}/>
                      <p>Midea AC</p>
                  </div>
                  <div>
                      <img src={Sharp}/>
                      <p>Sharp AC</p>
                  </div>
              </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;