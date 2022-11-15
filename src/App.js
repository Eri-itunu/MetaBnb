
import './App.css';
import Nav from './components/Nav/nav';
import Intro from './components/Intro/intro';
import Adventure from './components/Adventure/adventure';
import Sponsor from './components/Sponsor/sponsor';
import Nft from './components/NFT/nft';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <Sponsor/>
      <Adventure/>
      <Nft/>
      <Footer/>
    </div>
  );
}

export default App;
