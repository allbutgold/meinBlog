import React from 'react';


const LogoutButton = ({setLoginActive}) => {
  
  const URL = import.meta.env.VITE_BACKEND_URL
  const handleLogout = async () => {
    try {
      const response = await fetch(URL + 'logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setLoginActive(true)
      } else {
        alert('Error logging out. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
          <button onClick={handleLogout} type="button">
      Logout
    </button>
    </div>

  );
};

export default LogoutButton;
