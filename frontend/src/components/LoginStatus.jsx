import { useState, useEffect } from 'react';

const LoginStatus = ({LoginActive}) => {
  const [status, setStatus] = useState('')

  useEffect(() => {
    const checkLoginStatus = async () => {
      const url = import.meta.env.VITE_BACKEND_URL
      
      const result = await fetch(url + 'api/v1/checkUserStatus', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json' 
        },
      }) 
      console.log(result)
      if (result.status === 401) {
        setStatus("logged out")
      } else {
        setStatus('logged in')
      }
    }
    checkLoginStatus()
  }, [LoginActive]);

  
  return (
    <p>{status}</p>
  )
}

export default LoginStatus;