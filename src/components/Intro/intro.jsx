import { Component } from "react";
import image1 from "./images/image 3.svg"
import image2 from "./images/image 4.svg"
import image3 from "./images/image 5.svg"
import image4 from "./images/image 6.svg"
import "./intro.css"

class Intro extends Component{
    render(){
        return(
            <div className="intro-container">
                <div className="left-pane">
                    <h1>Rent a Place away from Home in the Metaverse</h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                </div>

                <div className="right-pane">
                    <div className="left-images">
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </div>
                    <div className="right-images">
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;