import { useState } from 'react'
function Login({setIsLoggedIn}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const SubmitLogin = async (e) => {
    e.preventDefault()
    
    const result = await fetch('http://localhost:9999/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: 'test', password: 'test'})
    })
    const data = await result.json()
    console.log(data)

    if(data.message) {
      setIsLoggedIn(true)
    }}
    
      return (
        <div>
          <h2>Login</h2>
          <form>
            <label htmlFor="username">username</label>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="password">password</label>
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={SubmitLogin}>Login</button>
          </form>
        </div>

    )
  }


export default Login