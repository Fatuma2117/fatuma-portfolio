import "./Footer.css";
import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
            </div>
            <div>
                <p> Minneapolis, Minnesota</p>
            </div>
            <div className="phone">
                <h4> <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                (612) 701-7161</h4>
               

            </div>
            <div className="phone">
                <h4> <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                Abdi.fatuma776@gmail.com</h4>
               

            </div>
        </div>
        <div className="right"></div>

      </div>
    </div>
  );
};

export default Footer;
