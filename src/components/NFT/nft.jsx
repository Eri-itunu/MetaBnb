import { Component } from "react";
import nftImg from  "./images/nft.svg"
import "./nft.css"

class Nft extends Component{
    render(){
        return(
            <div className="nft-container">

                <div className="left-nft-pane">
                    <h1>Metabnb NFTs</h1>
                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button>Learn more</button>
                </div>

                <div className="right-nft-pane">
                    <img src={nftImg} alt="" />
                </div>
            </div>
        )
    }
}

export default Nft;