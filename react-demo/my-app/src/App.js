import React, {Component} from "react";
import "./App.css";
import Home from "./Home";
import Audi from "./audi";
import Cars from "./Cars";
import Bmw from "./bmw";
import Mercedes from "./mercedes";
import About from "./About";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to ="/"> Home </Link>
          </li>
          <li>
            <Link to ="/cars"> Cars </Link>
          </li>
          <li>
            <Link to ="/about"> About </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
      <Routes>
      <Route exact path ="/" element={<Home/>}/>
      <Route exact path ="/cars" element={<Cars/>}/>
      <Route exact path ="/about" element={<About/>}/>
      <Route exact path= "/audi" element={<Audi/>}/>
      <Route exact path= "/bmw" element={<Bmw/>}/>
      <Route exact path= "/mercedes" element={<Mercedes/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
