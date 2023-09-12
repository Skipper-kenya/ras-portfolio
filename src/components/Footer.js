import React from "react";

import { TwitterLogo, LinkedinLogo, Envelope } from "phosphor-react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.twitter.com/Skipper_ke"
          rel="noreferre"
          target="_blank"
        >
          <TwitterLogo size={30} />
        </a>
        <a
          href="mailTo:kimwetichandrew@gmail.com"
          rel="noreferre"
          target="_blank"
        >
          <Envelope size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-kimwetich-84070a263/"
          rel="noreferre"
          target="_blank"
        >
          <LinkedinLogo size={30} />
        </a>
      </div>
      <p> &copy; 2023 RastaDevelopers. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
