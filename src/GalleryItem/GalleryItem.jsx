import { useState, useEffect } from 'react';
import './GalleryItem.css'
import Axios from 'axios';


function GalleryItem( galleryList, fetchGallery ) {
  const [ showing, setShowing ] = useState( true )
  const [ likes, setLikes ] = useState( galleryList.galleryList.likes )
  const [ disLikes, setDisLikes ] = useState( 0 )

  function addLike( ){
    console.log('In addLike function')
    Axios.put( `/api/gallery?id= ${ galleryList.galleryList.id }`) 
    .then(function(response){
      console.log('Back from PUT requst', response.data)
      fetchGallery
    })
    .catch((error)=>{
      alert('Error on the PUT request', error)
    })
    

  }
  
  

    return (
      <div className='component'>
      
        <h1 className='title'>{galleryList.galleryList.title}</h1>
        <div onClick={()=>{setShowing(!showing)}}>
          {showing 
            ?
           <img src={galleryList.galleryList.url} width='300px' className='Image'/>
          :
           <p className='desciption'>{galleryList.galleryList.description}</p>
         }
         
         </div>
         <p>{likes}</p>
         <p>Likes: {galleryList.galleryList.likes}    Dislikes: {disLikes}</p>
        <button className='Button1' onClick={addLike}>
         👍
         </button>
         <button className='Button2' onClick={()=>{setDisLikes( disLikes + 1 )}} >
          👎
         </button>
      </div>
    );
}

export default GalleryItem;