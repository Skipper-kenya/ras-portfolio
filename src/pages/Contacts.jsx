import React from "react";
import "../styles/contacts.css";
import contactus from "../assets/contactus.jpg";
import {
  Envelope,
  Headphones,
  Headset,
  LinkedinLogo,
  MessengerLogo,
  PhoneCall,
  TwitchLogo,
  TwitterLogo,
} from "phosphor-react";
const Contacts = () => {
  return (
    <div className="contacts-wrapper">
      <div className="contacts-holder">
        <div className="left-contacts-image">
          <img src={contactus} alt="contact us image" />
        </div>

        <div className="right-contacts">
          <h3>
            Contact us
            <Headset />
          </h3>
          <div className="contacts-card">
            <Generate_cards
              Icon={<PhoneCall />}
              platform="Phone"
              link="tel:+254702526377"
            />
            <Generate_cards
              Icon={<Envelope />}
              platform="Email"
              link="mailTo:kimwetichandrew@gmail.com"
            />
            <Generate_cards
              Icon={<LinkedinLogo />}
              platform="LinkedIn"
              link="https://www.linkedin.com/in/andrew-kimwetich-84070a263/"
            />
            <Generate_cards
              Icon={<TwitterLogo />}
              platform="Twitter"
              link="https://twitter.com/Skipper_Ke"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Generate_cards = (props) => {
  const { Icon, platform, link } = props;
  return (
    <a href={link} target="_blank">
      <div className="cards">
        <div className="card">
          <h1>{Icon}</h1>
          <h4>{platform}</h4>
        </div>
      </div>
    </a>
  );
};

export default Contacts;
