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

    popupToggle = () =>{
        this.setState({popup:!this.state.popup})
    }
    render() {

        const {popupToggle} = this;

        
        return(
            <nav className="nav">

                <div className="metabnb">
                    <img src={meta} alt="" />
                </div>
                <button className="toggle-button"  onClick={this.toggleButton} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <div className={this.state.toggle ? "navbar-links" : "navbar-links active"} >
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            <a href="/placetostay"> Place to stay</a>
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
                    <button onClick={this.popupToggle}>Connect Wallet</button>
                    
                </div>
                {this.state.popup && <Wallet popup = {popupToggle}/>}
            </nav>
        )
    }
}

export default Nav;