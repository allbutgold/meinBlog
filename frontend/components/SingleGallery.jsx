import { Link } from 'react-router-dom'

const API_URL = import.meta.env.VITE_BACKEND_URL

const SingleGallery = ({ gallery }) => {
  console.log(gallery)
  return (
    <div>
      <h2>{gallery.title}</h2>
      {gallery.postGalleryImages.map((image, index) => {
        return (
          <img key={index} src={`${API_URL}${image}`} style={{width: '400px'}}/>
        )
      }
      )}
      <Link to='/galleries'>Back</Link>
    </div>
  )
}

export default SingleGallery