import React from "react";
import logo from "../images/tercerLogo.png";
const Footer = () => {
    return (
        <footer>
            <div>
                <p>Powered by</p>
                <div className="divFooter">
                    <img src={logo} className="imgLogo" alt="logoRocio" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
