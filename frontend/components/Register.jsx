import { useState } from 'react'

function Register () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const url = import.meta.env.VITE_BACKEND_URL

  const SubmitRegister = async (e) => {
    e.preventDefault()

    const result = await fetch(url + 'register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
    const data = await result.json()
    console.log(data)
    
  }
  return (
    <form onSubmit={SubmitRegister}>
      <label htmlFor="username">username</label>
      <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <label htmlFor="password">password</label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Register</button>
    </form>
  )
}
export default Register