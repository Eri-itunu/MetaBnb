
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Place from './Pages/Place';


function App() {
  return <Routes>

    <Route path = "/" element = {<Home/>} />
    <Route path = "/placetostay" element = {<Place/>} />

  </Routes>



}

export default App;
