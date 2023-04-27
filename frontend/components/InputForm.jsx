import { useState } from 'react'


const InputForm = ({ setPosts }) => {
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()

    

    const formData = new FormData(e.target)

    const API_URL = import.meta.env.VITE_BACKEND_URL

    const result = await fetch(`${API_URL}api/v1/addPost`, {
      credentials: 'include',
      method: 'POST',
      body: formData
    })
    if (!result.ok) {
      setError('You are not authorized to create new posts')
      return
    } else {
      setMessage('Post created')
    }
    const data = await result.json()
    if(!data.message){
      setPosts(data)
      e.target.reset()   
    }
      

  }
  
  return (
    <div>
      <h3>create new post</h3>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {message && <p style={{color: 'green'}}>{message}</p>}

      <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title"></input><br/>
      <input type="file" name="postImage"></input>
      <textarea style={{margin: "20px"}} type="text" name="text" placeholder="Text" rows={15} cols={50}></textarea><br/>
      
      
      <button type="submit">upload</button>
      </form>
    </div>
  )
}

export default InputForm