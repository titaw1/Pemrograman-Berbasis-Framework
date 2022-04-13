import React, { Component } from "react";

import me from "../img/me.jpg";

class About extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={me}
          width="15%"
          alt="fotoprofil"
          className="my-5 rounded-circle"
        ></img>
        <h1>Tita Wijayanti</h1>
        <h3>TI-3C / 23 / 1941720053</h3>
        <a class="social-media-icon" href="https://www.facebook.com/tita.wijayanti.7"><span class="fab fa-facebook"></span></a>
        <a class="social-media-icon" href="https://www.instagram.com/titaw_"><span class="fab fa-instagram"></span></a>
        <a class="social-media-icon" href="https://github.com/titaw1"><span class="fab fa-github"></span></a>
      </div>
    );
  }
}

export default About;