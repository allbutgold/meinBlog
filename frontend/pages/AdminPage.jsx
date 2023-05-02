
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InputForm from '../components/InputForm.jsx'
import BlogListElement from '../components/BlogListElement'
import Register from '../components/Register.jsx'
import AddGalleries from '../components/AddGalleries.jsx'
import styles from './AdminPage.module.scss'
import ObjectList from '../components/ObjectList.jsx'
import UserCount from '../components/UserCount.jsx'
const AdminPage = () => {
  const [posts, setPosts] = useState()

  return (

    <section style={{'marginTop': "120px"}} className={styles.AdminPage}>
      <InputForm setPosts={setPosts}/>
      <Register />
      <AddGalleries />
    
      <ObjectList/>
      <UserCount />
      {/* <BlogListElement setPosts={setPosts} posts={posts}/> */}
      <Link to='/'>Back</Link>
    </section>
    
  )
}

export default AdminPage