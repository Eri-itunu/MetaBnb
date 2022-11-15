import { Component } from "react";
import meta from "./images/MetaNav.svg"
import "./nav.css"
import Wallet from "./subcomponent/wallet";

class Nav extends Component{

    constructor() {
        super();
    
        this.state = { 
            toggle:true,
            popup:false
        }
    }

    toggleButton = () =>{
        this.setState({toggle:!this.state.toggle})
        console.log(this.state.toggle)
        
    }

    popup = () =>{
        this.setState({popup:!this.state.popup})
    }
    render() {

        
        return(
            <nav className="nav">

                <div className="metabnb">
                    <img src={meta} alt="" />
                </div>
                <a className="toggle-button" href="#" onClick={this.toggleButton} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>

                <div className={this.state.toggle ? "navbar-links" : "navbar-links active"} >
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Place to stay
                        </li>
                        <li>
                            NFTs
                        </li>
                        <li>
                            Community
                        </li>
                    </ul>
                </div>

                <div className="nav-button">
                    <button onClick={this.popup}>Connect Wallet</button>
                    {this.state.popup && <Wallet/>}
                </div>
            </nav>
        )
    }
}

export default Nav;