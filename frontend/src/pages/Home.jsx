import styles from './Scss/Home.module.scss'
import BlogPreviewList from '../components/BlogPreviewList'
import { useState } from 'react'

const Home = () => {
  const [posts, setPosts] = useState()

  return (
    <section className={styles.Home}>
      <BlogPreviewList className={styles.gridItem} posts={posts} setPosts={setPosts} /> 
    </section>
  )

}

export default Home 