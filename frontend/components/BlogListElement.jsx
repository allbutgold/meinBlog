import { useEffect } from 'react'
import BlogEintrag from '../components/BlogEintrag.jsx'

const BlogListElement = ({ setPosts, posts}) => {

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
        <BlogEintrag post={post}/>
      )
    })}
    </div>
  )
}

export default BlogListElement