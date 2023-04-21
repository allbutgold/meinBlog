

const InputForm = ({ setPosts }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const API_URL = import.meta.env.VITE_BACKEND_URL

    fetch(`${API_URL}api/v1/addPost`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      setPosts(data)
      console.log(data)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title"></input>
      <input style={{margin: "20px"}} type="text" name="text" placeholder="Text"></input>
      <input type="file" name="postImage"></input>
      <button type="submit">upload</button>
      </form>
    </div>
  )
}

export default InputForm