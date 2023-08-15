import { useState } from "react"
import styles from "../components/Scss/Login.module.scss"
function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const url = import.meta.env.VITE_BACKEND_URL

  const SubmitLogin = async (e) => {
    e.preventDefault()

    const result = await fetch(url + "login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
    if (result.status === 401) {
      setError("You are not authorized to access this page")
      return
    }
    if (result.ok) {
      setIsLoggedIn(true)
    }
  }

  return (
    <div className={styles.Login}>
      <h2>Please log into your account</h2>
      <h5>
        To checkout the backend login with: <h4>user user</h4>
      </h5>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <form>
        <label style={{ padding: "10px" }} htmlFor='username'>
          username
        </label>
        <input
          type='text'
          name='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label style={{ padding: "10px" }} htmlFor='password'>
          password
        </label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button style={{ margin: "10px" }} onClick={SubmitLogin}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
