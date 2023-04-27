import GalleryPreviewList from '../components/GalleryPreviewList.jsx';
import { useState } from 'react'
import styles from './Galleries.module.scss'

const Galleries = () => {
  const [galleries, setGalleries] = useState()

  return (
    <section className={styles.Galleries}>
      <GalleryPreviewList galleries={galleries} setGalleries={setGalleries} />
    </section>
  )
}

export default Galleries