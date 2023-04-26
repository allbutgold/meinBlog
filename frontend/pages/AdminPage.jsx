
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InputForm from '../components/InputForm.jsx'
import BlogListElement from '../components/BlogListElement'
import Register from '../components/Register.jsx'


const AdminPage = () => {
  const [posts, setPosts] = useState()

  return (

    <section style={{'marginTop': "120px"}}>
      <h3>Make new admin account</h3>
      <Register />
      <InputForm setPosts={setPosts}/>
      <BlogListElement setPosts={setPosts} posts={posts}/>
      <Link to='/'>Back</Link>
    </section>
    
  )
}

export default AdminPage