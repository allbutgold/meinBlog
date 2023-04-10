
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InputForm from '../components/InputForm.jsx'
import BlogListElement from '../components/BlogListElement'


const AdminPage = () => {
  const [posts, setPosts] = useState()

  return (

    <section>
      <h1>Admin Page</h1>
      <InputForm setPosts={setPosts}/>
      <BlogListElement setPosts={setPosts} posts={posts}/>
      <Link to='/'>Back</Link>
    </section>
    
  )
}

export default AdminPage