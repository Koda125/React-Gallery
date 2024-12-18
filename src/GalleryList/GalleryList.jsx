import Axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList() {
  const [galleryList, setGalleryList] = useState([])


  useEffect(() => {
    fetchGallery()
  }, [ ]);

  function fetchGallery( ) {
    console.log('Fetching the gallery')
    Axios({
      method: "GET",
      url: "/api/gallery"
    })
    .then((response) => {
      console.log('Gallery aquired: ', response.data)
      //Render function:
      setGalleryList(response.data)
    })
    .catch((error) => {
      console.log("Oh no! An error has occured: ", error)
    })
  }

    return (
      <div>
        
          
          <p>
            {galleryList.map( (galleryList, index)=>(
              <GalleryItem key={index} galleryList={galleryList} fetchGallery={ fetchGallery }/>
            ))}
          </p>
        

        
        
      </div>
    );
}

export default GalleryList;