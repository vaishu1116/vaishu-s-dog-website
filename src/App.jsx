import React from "react";
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";
 

import AmericanDog from "./pages/AmericanDog";
import Home from "./pages/home";
import GermanShepard from "./pages/GermanShepard";
import GoldenRetriever from "./pages/GoldenRetriever";
import Pomeranian from "./pages/Pomeranian";
import Shiba from "./pages/Shiba";
import ShiberianHusky from "./pages/ShiberianHusky";


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/americandog" element={<AmericanDog/>}/>
        <Route path="/germanshepard" element={<GermanShepard/>}/>
        <Route path="/goldenretriever" element={<GoldenRetriever/>}/>
        <Route path="/pomeranian" element={<Pomeranian/>}/>
        <Route path="/shiba" element={<Shiba/>}/>
        <Route path="/shiberianhusky" element={<ShiberianHusky/>}/>
      </Routes>
    </Router>
  )
}
export default App;



