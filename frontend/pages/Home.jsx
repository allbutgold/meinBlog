import BlogListElement from '../components/BlogListElement'
import { useState } from 'react'

const Home = () => {
  const [posts, setPosts] = useState()

  return (
    <section>
      <h1>HOME</h1>
{/*       <BlogEintrag /> */}
      <BlogListElement posts={posts} setPosts={setPosts}/>

    </section>
  )

}

export default Home