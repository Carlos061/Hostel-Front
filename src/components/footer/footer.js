import React from "react";
import "./footer.css"
import fb from "../assets/instagram.png"
import twitter from "../assets/instagram.png"
import linkedin from "../assets/instagram.png"
import insta from "../assets/instagram.png"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Health plan</p>
                        </a>
                        <a href="/employer">
                            <p>Individual</p>
                        </a>
                        <a href="/employer">
                            <p>Resources</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resource">
                            <p>Resource centre</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                    <h4>Paterners</h4>
                        <a href="/about">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                    <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Testimonials</p>
                        </a>
                        <a href="/career">
                            <p>Contact</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Coming soon on</h4>
                        <div className="social media">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                            <p><img src={linkedin} alt=""/></p>
                            <p><img src={insta} alt=""/></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb-footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        <a href="/cookie"><div><p>Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer