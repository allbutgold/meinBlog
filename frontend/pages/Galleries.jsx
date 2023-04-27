import GalleryPreviewList from '../components/GalleryPreviewList.jsx';
import { useState } from 'react'

const Galleries = () => {
  const [galleries, setGalleries] = useState()

  return (
    <section>
      <GalleryPreviewList galleries={galleries} setGalleries={setGalleries} />
    </section>
  )
}

export default Galleries