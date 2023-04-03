import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BlogEintrag from '../components/BlogEintrag'


const BlogDetailPage = () => {
  const [posts, setPosts] = useState()
  const {id} = useParams()

  useEffect(() => {
    fetch(`http://localhost:9999/api/v1/getPosts/${id}`)
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