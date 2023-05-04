import { useState } from 'react'


function Register () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const url = import.meta.env.VITE_BACKEND_URL

  const SubmitRegister = async (e) => {
    e.preventDefault()

  
    const result = await fetch(url + 'register', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password, role})
    })
    if (result.status === 403) {
      setError('You are not authorized to create new users')
      return
    } else if (result.status === 200) {
      setMessage('User created')
      return
    }
    const data = await result.json()
    console.log(data)
    e.target.reset()
    setUsername('')
    setPassword('')
    setError('')
  }
  return (
    <div>
      <form onSubmit={SubmitRegister}>
      <h3>create new account</h3>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {message && <p style={{color: 'green'}}>{message}</p>}
      <label style={{padding: '10px'}} htmlFor="username">username</label>
      <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
      <label style={{padding: '10px'}} htmlFor="password">password</label>
      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
      <label htmlFor="role">role </label>
      <select name="role" value={role} id="" onChange={(e) => setRole(e.target.value)} required>
        <option value="" disabled>choose one</option>    
        <option value="admin">admin</option>    
        <option value="editor">editor</option>   
        <option value="user">user</option>     
      </select><br/>
      <button style={{margin: '10px'}} type="submit">Register</button>
      
    </form>
    </div>
    
  )
}
export default Register