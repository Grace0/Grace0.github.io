import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div class="table">
          <ul>
            <li><a href="mailto:grace.kwak25@gmail.com">
            <i class="fas fa-envelope-square"></i>
            </a></li>
            <li><a href="https://www.linkedin.com/in/grace-j-kwak/">
            <i class="fab fa-linkedin"></i>
            </a></li>
            <li><a href="https://medium.com/@gracekwak">
            <i class="fab fa-medium"></i>
            </a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
