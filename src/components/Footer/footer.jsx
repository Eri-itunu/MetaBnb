import { Component } from "react";
import meta from "./images/Metabnb.svg"

import "./footer.css"

class Footer extends Component{
    

    render(){
        return(
            <div className="footer-container">
                <div className="meta">
                    <img src={meta}alt="" />
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