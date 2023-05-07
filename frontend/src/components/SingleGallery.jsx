import { Link } from 'react-router-dom'
import styles from '../components/Scss/SingleGallery.module.scss'

const API_URL = import.meta.env.VITE_BACKEND_URL

const SingleGallery = ({ gallery }) => {
  console.log(gallery)
  return (
    <div className={styles.SingleGallery}>
      <h2>{gallery.title}</h2>
      {gallery.postGalleryImages.map((image, index) => {
        return (
          <img key={index} src={`${API_URL}${image}`} />
        )
      }
      )}
      <Link to='/galleries'>Back to galleries</Link>
    </div>
  )
}

export default SingleGallery