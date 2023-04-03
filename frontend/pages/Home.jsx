import styles from './Home.module.scss'
import BlogPreviewList from '../components/BlogPreviewList'
import { useState } from 'react'
import logo from '.././src/assets/Logo.png'

const Home = () => {
  const [posts, setPosts] = useState()

  return (
    <section className={styles.Home}>
      {/* <img src={logo} style={{width: '200px'}}/> */}
      <h1>Leo's travel blog</h1>
      <BlogPreviewList posts={posts} setPosts={setPosts} />
{/*       <BlogEintrag /> */}


    </section>
  )

}

export default Home