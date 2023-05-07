import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SingleGallery from '../components/SingleGallery.jsx'
import AddComment from '../components/AddComment.jsx'

const GalleriesDetailPage = () => {
  const [galleries, setGalleries] = useState()
  const {id} = useParams()
  const API_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    fetch(`${API_URL}api/v1/getGalleries/${id}`)
    .then(res => res.json())
    .then(data => setGalleries(data))
  }, [])
  console.log(galleries)
  if(!galleries) return

  return (
    <div>
      <SingleGallery gallery={galleries}/>
      <AddComment />
    </div>
  )

}

export default GalleriesDetailPage
