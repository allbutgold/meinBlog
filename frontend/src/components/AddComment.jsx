import { useState, useEffect } from "react"
import styles from "../components/Scss/AddComment.module.scss"

const URL = import.meta.env.VITE_BACKEND_URL

const AddComment = () => {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [username, setUsername] = useState("")
  const [timestamp, setTimestamp] = useState(Date())
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch(`${URL}api/v1/getComments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const currentDate = new Date()
    setTimestamp(currentDate.toISOString())
    try {
      const response = await fetch(`${URL}api/v1/addComment`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, comment, timestamp }),
      })
      if (response.status === 401) {
        setError("Login to write a comment")
      } else if (response.status === 200) {
        setMessage("success!")
        setComments([
          ...comments,
          { username, comment, timestamp: currentDate.toISOString() },
        ])
        setComment("")
      }
    } catch (error) {
      setError("An error occurred while adding the comment.")
      console.error("Error adding comment:", error)
    }
  }
  // console.log(comments)
  return (
    <div className={styles.AddComment}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <br />
        <input
          type='text'
          value={username}
          name='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}
        <br />
        <br />
        <label htmlFor='comment'>Comment</label>
        <br />
        <textarea
          name='comment'
          rows={10}
          cols={80}
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <br />
        <button type='submit'>Add Comment</button>
      </form>
      <div className={styles.commentsField}>
        {comments.reverse().map((comment, key) => {
          const commentDate = new Date(comment.timestamp)
          const formattedDate = commentDate.toLocaleDateString()
          return (
            <div>
              <div className={styles.singleComment}>
                <h4>{comment.username}</h4>
                <p>{formattedDate}</p>
                <p>{comment.comment}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AddComment
