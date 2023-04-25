import { useState } from 'react'

function Register () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')

  const url = import.meta.env.VITE_BACKEND_URL

  const SubmitRegister = async (e) => {
    e.preventDefault()

    if (role === 'empty') {
      setError('Please selecte a role before sumbitting')
      return
    }

    const result = await fetch(url + 'register', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password, role})
    })
    const data = await result.json()
    console.log(data)
    e.target.reset()
    setUsername('')
    setPassword('')
    setRole('')
    setError('')
  }
  return (
    <form onSubmit={SubmitRegister}>
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
      {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
  )
}
export default Register