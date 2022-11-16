import { Component } from "react";
import "../nav.css"
import x from "../images/x.svg"
class Wallet extends Component{
    render(props) {

        
        return(

            
            <div onClick={this.props.popup} className="wallet-modal">

                <div className="wallet-container">

                    <div className="wallet-header">
                        <h1>Connect Wallet</h1>
                        <img onClick={this.props.popup} src={x} alt="" />
                    </div>

                    <div className="wallet-options">
                        <p>Choose your preferred wallet:</p>
                        <button className="options"><img src="" alt="" /> Metamask</button>
                        <button className="options"><img src="" alt="" /> Wallet Connect</button>
                    </div>

                </div>

            </div>
        )
    }
}

export default Wallet;