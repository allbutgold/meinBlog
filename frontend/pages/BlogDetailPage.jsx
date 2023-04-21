import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BlogEintrag from '../components/BlogEintrag'


const BlogDetailPage = () => {
  const [posts, setPosts] = useState()
  const {id} = useParams()
  const API_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    fetch(`${API_URL}/api/v1/getPosts/${id}`)
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  if(!posts) return

  return (
    <div>
        <BlogEintrag post={posts}/>
        <Link to='/'>Back</Link>
    </div>
  )

}

export default BlogDetailPage