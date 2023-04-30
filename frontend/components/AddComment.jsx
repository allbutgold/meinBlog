import { useState, useEffect } from 'react'

const URL = import.meta.env.VITE_BACKEND_URL

const AddComment= () => {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [username, setUsername] = useState("")
  const [timestamp, setTimestamp] = useState(Date())
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch(`${URL}api/v1/getComments`)
    .then(res => res.json())
    .then(data => setComments(data))
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimestamp()  
    fetch(`${URL}api/v1/addComment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, comment, timestamp})
    })
    .then(data => {
      setComments([...comments, data])
      setComment("")
    }) 
    

  }
  console.log(comments)
  return ( 
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label><br />
        <input type="text" value={username} name='username'  onChange={(e) => setUsername(e.target.value)} /><br /><br />
        <label htmlFor="comment">Comment</label><br />
        <textarea name='comment' rows={10} cols={80} type="text" value={comment} onChange={(e) => setComment(e.target.value)} /><br />
        <button type="submit">Add Comment</button>
      </form>
      <ul>
        {comments.map((comment, key) => {
          return (
            <div style={{margin: '50px'}}>
              <h4>{comment.username}</h4>
              <p>{comment.timestamp}</p>
              <p>{comment.comment}</p>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default AddComment;