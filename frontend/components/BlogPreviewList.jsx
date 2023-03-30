import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogPreview from '../components/BlogPreview.jsx'

const BlogPreviewList = ({ setPosts, posts}) => {

  useEffect(() => {
    fetch('http://localhost:9999/api/v1/getPosts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  if(!posts) return

  return (
    <div>
          {posts.map((post) => {
      return (
        <Link to={`/blogdetailpage/ + ${posts.id}`}>
          <BlogPreview post={post}/>
        </Link>

      )
    })}
    </div>
  )
}

export default BlogPreviewList