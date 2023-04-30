import { useState, useEffect } from 'react'

const URL = import.meta.env.VITE_BACKEND_URL

const PostCount = () => {
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    fetch(`${URL}api/v1/getPosts`)
    .then(res => res.json())
    .then(data => setPostCount(data.length))
  }, []);

  return ( 
    <div>
      <h2>Posts: {postCount}</h2>
    </div>
  );
}

export default PostCount;