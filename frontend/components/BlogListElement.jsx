import { useEffect } from 'react'
import BlogEintrag from '../components/BlogEintrag.jsx'

const API_URL = import.meta.env.VITE_API_URL

const BlogListElement = ({ setPosts, posts}) => {

  useEffect(() => {
    fetch(`${API_URL}/api/v1/getPosts`)
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  if(!posts) return

  return (
    <div>
          {posts.map((post) => {
      return (
        <BlogEintrag post={post}/>
      )
    })}
    </div>
  )
}

export default BlogListElement