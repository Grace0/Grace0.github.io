import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <main class="flex-center">
          <div>
            <a href="mailto:gracekwak25@gmail.com">
              {" "}
              <img
                border="0"
                alt="gmail"
                src={require("../img/gmail.png")}
                className="icons"
              />{" "}
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/grace-j-kwak/">
              {" "}
              <img
                border="0"
                alt="linkedin"
                src={require("../img/linkedin.png")}
                className="icons"
              />{" "}
            </a>
          </div>
          <div>
            <a href="https://github.com/Grace0">
              {" "}
              <img
                border="0"
                alt="github"
                src={require("../img/github.png")}
                className="icons"
              />{" "}
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default Footer;
