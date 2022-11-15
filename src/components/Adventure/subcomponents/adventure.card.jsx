import { Component } from "react";
import star from "../images/stars.svg"

class Card extends Component{

    render(){
        const {src,  title, stay, distance, time} = this.props.gallery;
        
        return(

            <div className="adventure-images-card">
                <img src={src} alt="" />

                <div className="info">
                    <p>{title}</p>
                    <p>{stay}</p>
                </div>
                <div className="info">
                    <p>{distance}</p>
                    <p>{time}</p>
                </div>
                <div className="info">
                    <img src={star} alt="" />
                </div>
            </div>

        )
    }
}

export default Card;