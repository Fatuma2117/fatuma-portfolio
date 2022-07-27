import "./Footer.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          <p> Minneapolis, Minnesota</p> </div>
          <div>
           
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              (612) 701-7161
            </h4>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Abdi.fatuma776@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4> About the company</h4>
            <p> New Projects and design challenges. </p>
            <div className="social">
            <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
                 <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
