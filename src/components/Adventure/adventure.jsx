import "./adventure.css"
import { Component } from "react";
import Card from "./subcomponents/adventure.card"
import image from "./images/adevnture-1.svg"
import image2 from "./images/Frame 151 (1).svg"
import image3 from "./images/Frame 151 (2).svg"
import image4 from "./images/Frame 151 (3).svg"
import image5 from "./images/Frame 151 (4).svg"
import image6 from "./images/Frame 151 (5).svg"
import image7 from "./images/Frame 151 (6).svg"
import image8 from "./images/Frame 151.svg"

class Adventure extends Component{
    render(){

        let adventureGallery=[
            {src:image, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image2, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image3, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image4, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image5, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image6, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image7, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image8, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'}
        ]
        return(
            <div className="adventure-container">
                <div className="adventure-header">
                    <h1 className="header">Inspiration for your next adventure</h1>
                </div>

                <div className="adventure-images">
                    {adventureGallery.map ((gallery) =>{
                        return(
                            <Card gallery={gallery}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Adventure;