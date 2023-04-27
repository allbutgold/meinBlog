
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InputForm from '../components/InputForm.jsx'
import BlogListElement from '../components/BlogListElement'
import Register from '../components/Register.jsx'
import AddGalleries from '../components/AddGalleries.jsx'
import styles from './AdminPage.module.scss'

const AdminPage = () => {
  const [posts, setPosts] = useState()

  return (

    <section style={{'marginTop': "120px"}} className={styles.AdminPage}>
      
      
      <AddGalleries />
      <InputForm setPosts={setPosts}/>
      <Register />
      
      {/* <BlogListElement setPosts={setPosts} posts={posts}/> */}
      <Link to='/'>Back</Link>
    </section>
    
  )
}

export default AdminPage