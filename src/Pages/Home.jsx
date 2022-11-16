import { Component } from "react";
import Nav from "../components/Nav/nav";
import Intro from "../components/Intro/intro";
import Sponsor from "../components/Sponsor/sponsor";
import Adventure from "../components/Adventure/adventure";
import Nft from "../components/NFT/nft";
import Footer from "../components/Footer/footer";

class Home extends Component{
    render(){
        return(
            <div >
                <Nav/>
                <Intro/>
                <Sponsor/>
                <Adventure/>
                <Nft/>
                <Footer/>
            </div>
        )
    }
}

export default Home;