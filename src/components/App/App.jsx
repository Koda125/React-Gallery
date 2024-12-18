import { useState, useEffect } from "react";
import Axios from "axios";
import GalleryList from "../../GalleryList/GalleryList";
import './App.css';
function App() {
  

    return (
      <div>
        <header>
          <h1 className="header">React Gallery</h1>
        </header>
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/> */}
        <GalleryList />
      </div>
    );
}

export default App;
