
import { Component } from "react";
import Nav from "../components/Nav/nav";
import Footer from "../components/Footer/footer";
import Adventure from "../components/Adventure/subcomponents/adventure.card";
import image from "../components/Adventure/images/Frame 151.svg"
import image1 from "../components/Adventure/images/Frame 151 (1).svg"
import image2 from "../components/Adventure/images/Frame 151 (2).svg"
import image3 from "../components/Adventure/images/Frame 151 (3).svg"
import image4 from "../components/Adventure/images/Frame 151 (4).svg"
import image5 from "../components/Adventure/images/Frame 151 (5).svg"
import image6 from "../components/Adventure/images/Frame 151 (6).svg"
import image7 from "../components/Adventure/images/places/Frame 151 (7).svg"
import image8 from "../components/Adventure/images/places/Frame 151 (8).svg"
import image9 from "../components/Adventure/images/places/Frame 151 (9).svg"
import image10 from "../components/Adventure/images/places/Frame 151 (6).svg"
import image11 from "../components/Adventure/images/places/Frame 151 (5).svg"
import image12 from "../components/Adventure/images/places/Frame 151 (4).svg"
import image13 from "../components/Adventure/images/places/Frame 151 (3).svg"
import image14 from "../components/Adventure/images/places/Frame 151 (2).svg"
import image15 from "../components/Adventure/images/places/Frame 151 (1).svg"
import image16 from "../components/Adventure/images/places/Frame 151 (10).svg"
import image17 from "../components/Adventure/images/places/Frame 151 (11).svg"



import Heading from "../components/Heading/heading";


class Place extends Component {
    render() {

        let adventureGallery=[
            {src:image, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image2, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image3, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image4, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image5, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image6, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image7, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image8, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image1, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image9, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image10, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image11, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image12, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image13, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image14, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image15, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image16, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},
            {src:image17, title:'Desert king' , stay:'1MBT per night',distance:'2345km away', time:'available for 2weeks stay'},

        
    ]
        return(
            <div className="place">
                <Nav/>
                <Heading/>
                <div className="place-images">
                    <div className="adventure-images">
                        {adventureGallery.map ((gallery) =>{
                            return(
                                <>
                                    
                                    <Adventure gallery={gallery}/>
                                </>
                            )
                        })}
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default Place;