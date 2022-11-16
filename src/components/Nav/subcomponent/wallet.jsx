import { Component } from "react";
import "../nav.css"
import x from "../images/x.svg"
import wallet from "../images/Wallet.svg"
import mask from "../images/Fox.svg"
import check from "../images/Down Chevron.svg"

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
                        <button className="options">
                            <div className="image">
                                <img src={mask} alt="" /> <h1>Metamask</h1>
                            </div>
                            <div className="arrow">
                                <img src={check} alt="" />
                            </div>
                        </button>
                        <button className="options">
                            <div className="image">
                                <img src={wallet} alt="" /> <h1>Wallet Connect</h1>
                            </div>
                            <div className="arrow">
                                <img src={check} alt="" />
                            </div>
                        </button>
                    </div>

                </div>

            </div>
        )
    }
}

export default Wallet;