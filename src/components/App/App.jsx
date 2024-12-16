import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  
  function onReady( ) {
    console.log('Place holder to use function in fetch for time being.')
  }

  function fetchGallery( ) {
    console.log('Fetching the gallery')
    Axios({
      method: "GET",
      url: /api/gallery
    })
    .then((response) {
      console.log('Gallery aquired: ', response.data)
      //Render function:
      onReady()
    })
    .catch((error) {
      console.log("Oh no! An error has occured: ", error)
    })
  }

    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
      </div>
    );
}

export default App;
