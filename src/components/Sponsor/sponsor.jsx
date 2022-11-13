import { Component } from "react";
import "./sponsor.css"
import token from "./images/MBToken.svg"
import mask from "./images/METAMASK.svg"
import sea from "./images/OPENSEA.svg"

class  Sponsor extends Component {

    render(){

        return(
            <div className="sponsor-images">
                <img src={token} alt="" />
                <img src={mask} alt="" />
                <img src={sea} alt="" />
            </div>
        )
    }
}

export default Sponsor;