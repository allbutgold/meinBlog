import { useState, useEffect } from 'react'
import './App.css'
import AdminPage from '../pages/AdminPage.jsx'
import InputForm from '../components/InputForm.jsx'
import BlogEintrag from '../components/BlogEintrag.jsx'



function App() {
  const [posts, setPosts] = useState()

  useEffect(() => {
    fetch('http://localhost:9999/api/v1/getPosts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  if(!posts) return

  return (
    <main className="App">

      
      <InputForm setPosts={setPosts}/>
      {posts.map((post) => {
        return (
          <BlogEintrag post={post}/>
        )
      })}

    </main>
  )
} 

export default App
