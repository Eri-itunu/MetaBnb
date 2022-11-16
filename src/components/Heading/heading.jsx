import { Component } from "react";
import "./heading.css"
import setting from "./images/setting.svg"

class Heading extends Component{
    render(){
        return(
            <div className="heading">
                    
                        <li>
                        Resturant
                        </li>
                        <li>
                        Cottage
                        </li>
                        <li>
                        Castle
                        </li>
                        <li>
                        fantast city
                        </li>
                        <li>
                        beach
                        </li>
                        <li>
                        Carbins
                        </li>
                        <li>
                        Off-grid
                        </li>
                        <li>
                        Farm
                        </li>
                        <li>
                            <button className="location">  Location <img src={setting} alt="" /> </button>
                        </li>
                    
                </div>
        )
    }
}

export default Heading