import { useEffect, useState } from 'react'
import GalleryPreview from './GalleryPreview.jsx'

const API_URL = import.meta.env.VITE_BACKEND_URL

const GalleryPreviewList = ({ setGalleries, galleries}) => {
  
    useEffect(() => {
      fetch(`${API_URL}api/v1/getGalleries`)
      .then(res => res.json())
      .then(data => setGalleries(data))
    }, [])

    if(!galleries) return
    console.log(galleries)

    return (
      <div>
            {galleries.map((gallery) => {
              return (
              
                <GalleryPreview gallery={gallery}/>
              )
            })}
        
      </div>
    )
}

export default GalleryPreviewList