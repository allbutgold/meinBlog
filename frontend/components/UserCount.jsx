import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_BACKEND_URL

const UserCount = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetch(`${URL}api/v1/getUsers`)
    .then(res => res.json())
    .then(data => setUserCount(data))
    console.log(userCount)
  }, []);
console.log()

  return ( 
    <div>
      <h2>Users: {userCount}</h2>
    </div>
  );
}

export default UserCount;