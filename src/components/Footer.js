import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <div class="tile_div">
          <a href="mailto:grace.kwak25@gmail.com"> <img border="0" alt="gmail" src={ require('../img/gmail.png')} style={{width: 50}} /> </a>
          <a href="https://www.linkedin.com/in/grace-j-kwak/"> <img border="0" alt="linkedin" src={ require('../img/linkedin.png')} style={{width: 50}} /> </a>
          <a href="https://medium.com/@gracekwak" class="last"> <img border="0" alt="medium" src={ require('../img/medium.png')} style={{width: 50}} /> </a>
          <div class="clear"></div>
      </div>
      </div>
    );
  }
}

export default Footer;
