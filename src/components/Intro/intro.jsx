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
                    
                    <div>Rent a <span className="purple"> Place</span> away from <span className="purple">Home</span>  in the <span className="purple">Metaverse</span></div>

                    
                    
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

                    <div className="search-bar">
                        <form>
                            <input type="text" placeholder="Search for location"/>
                            <button type="submit">Search</button>
                        </form>
                    </div>
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