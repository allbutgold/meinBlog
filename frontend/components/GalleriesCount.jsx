import { useState, useEffect } from 'react'

const URL = import.meta.env.VITE_BACKEND_URL

const GalleriesCount = () => {
  const [galleriesCount, setGalleriesCount] = useState(0);

  useEffect(() => {
    fetch(`${URL}api/v1/getGalleries`)
    .then(res => res.json())
    .then(data => setGalleriesCount(data.length))
  }, []);

  return ( 
    <div>
      <h2>Galleries: {galleriesCount}</h2>
    </div>
  );
}

export default GalleriesCount;