
import { useState, useEffect } from 'react'

import InputForm from '../components/InputForm.jsx'
import BlogEintrag from '../components/BlogEintrag.jsx'
import BlogListElement from '../components/BlogListElement'


const AdminPage = () => {
  const [posts, setPosts] = useState()

  return (

    <section>
      <h1>Amdin Page</h1>
      <InputForm setPosts={setPosts}/>
      <BlogListElement setPosts={setPosts} posts={posts}/>
    {/*   {posts.map((post) => {
        return (
          <BlogEintrag post={post}/>
        )
      })} */}
    </section>
  )
}

export default AdminPage