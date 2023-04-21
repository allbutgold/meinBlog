import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogPreview from '../components/BlogPreview.jsx'

const API_URL = import.meta.env.VITE_BACKEND_URL
const BlogPreviewList = ({ setPosts, posts}) => {

  useEffect(() => {
    fetch(`${API_URL}api/v1/getPosts`)
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  if(!posts) return

  return (
    <div>
          {posts.map((post) => {
      return (
          <BlogPreview key={post._id} post={post}/>
      )
    })}
    </div>
  )
}

export default BlogPreviewList