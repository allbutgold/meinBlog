import { useState } from 'react'
function Login({setIsLoggedIn}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const url = import.meta.env.VITE_BACKEND_URL

  const SubmitLogin = async (e) => {
    e.preventDefault()
    
    const result = await fetch(url + 'login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    })
    const data = await result.json()
    
    if (result.status === 401) {
      setError('You are not authorized to access this page')
      return
    } 
    if(result.ok){
      setIsLoggedIn(true)
    }}
    
      return (
        <div style={{'marginTop': "120px"}}>
          <h2>Login</h2>
          {error && <p style={{color: 'red'}}>{error}</p>}
          {message && <p style={{color: 'green'}}>{message}</p>}
          <form>
            <label style={{padding: '10px'}} htmlFor="username">username</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
            <label style={{padding: '10px'}} htmlFor="password">password</label>
            <input  type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <button style={{margin: '10px'}} onClick={SubmitLogin}>Login</button>
          </form>
        </div>
    )
  }


export default Login