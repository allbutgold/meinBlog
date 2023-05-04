
import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Scss/AdminPage.module.scss'

import CreatePost from '../components/AdminPageComponents/CreatePost.jsx'
import Register from '../components/AdminPageComponents/Register.jsx'
import AddGalleries from '../components/AdminPageComponents/AddGalleries.jsx'
import DeleteGallery from '../components/AdminPageComponents/DeleteGallery.jsx'
import SiteStats from '../components/AdminPageComponents/SiteStats.jsx'

const AdminPage = () => {
  const [posts, setPosts] = useState()

  return (
    <section className={styles.AdminPage}>
      <CreatePost setPosts={setPosts}/>
      <Register />
      <AddGalleries />
      <DeleteGallery/>
      <SiteStats />
      <Link to='/'>Home</Link>
    </section> 
  )
}

export default AdminPage