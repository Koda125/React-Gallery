import { useState, useEffect } from 'react';

function GalleryItem( galleryList ) {
  const [ showing, setShowing ] = useState( true )


  function toggleGallery( ) {
    console.log('Toggling img to desc')
    const galleryImage = true
    // Axios({
    //   method: "PUT",
    //   url: '/api/todos',
    //   data: galleryImage
    // })
    // .then((response) => {
    //   console.log('/todos update request recieved', response.data)
      
    // })
    // .catch((error) => {
    //   console.log('error on the PUT request', error)
    //   alert(error)
    // })
  }
    return (
      <div>
      
          <h1>{galleryList.galleryList.title}</h1>
        <div>
          <p>{galleryList.galleryList.description}</p>
         <img src={galleryList.galleryList.url} width='300px'/>
         </div>
        
      </div>
    );
}

export default GalleryItem;