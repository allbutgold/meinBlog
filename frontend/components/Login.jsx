import { useState } from 'react'
function Login({setIsLoggedIn}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const url = import.meta.env.VITE_BACKEND_URL

  const SubmitLogin = async (e) => {
    e.preventDefault()
    
    const result = await fetch(url + 'login', {
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
        <div style={{'marginTop': "120px"}}>
          <h2>Login</h2>
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