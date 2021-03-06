import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{emoji("Make By YounGyeom💙")}</p>
                    <p style={{marginTop: "15px"}}>Theme By <a href="https://github.com/FromGoodEnoughYounGyeom/fromgoodenoughyoungyeom.github.io">ReactFolio</a></p>
                </div>

            </div>
        </footer>
    );
}
export default Footer;