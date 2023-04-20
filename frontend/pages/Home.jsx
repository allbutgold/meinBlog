import styles from './Home.module.scss'
import BlogPreviewList from '../components/BlogPreviewList'
import { useState } from 'react'

const Home = () => {
  const [posts, setPosts] = useState()

  return (
    <section className={styles.Home}>
      <h1>Leo's travel blog</h1>
      <BlogPreviewList posts={posts} setPosts={setPosts} /> 
    </section>
  )

}

export default Home