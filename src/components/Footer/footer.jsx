import { Component } from "react";
import meta from "./images/Metabnb.svg"
import fb from "./images/fb.svg"
import insta from "./images/insta.svg"
import twitter from "./images/twitter.svg"
import copy from "./images/copy.svg"
import "./footer.css"

class Footer extends Component{
    

    render(){
        return(
            <div className="footer-container">
                <div className="meta">
                    <img src={meta}alt="" />
                    
                    <div className="socials">
                        <img src={fb} alt="" />
                        <img src={twitter} alt="" />
                        <img src={insta} alt="" />
                    </div>

                    <img className="copy" src={copy} alt="" />
                </div>

                <div className="community">
                    <h1>Community</h1>
                    <p>NFT</p>
                    <p>Tokens</p>
                    <p>Landlords</p>
                    <p>Discord</p>
                </div>

                <div className="places">
                    <h1>Places</h1>
                    <p>Castles</p>
                    <p>Farm</p>
                    <p>Beaches</p>
                    <p>Learn More</p>
                </div>

                <div className="about">
                    <h1>About us</h1>
                    <p>Road Map</p>
                    <p>Creators</p>
                    <p>Career</p>
                    <p>Contact Us</p>
                </div>

            </div>
        )
    }
}

export default Footer;