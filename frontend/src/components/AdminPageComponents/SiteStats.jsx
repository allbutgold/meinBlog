import { useEffect, useState } from "react";

const URL = import.meta.env.VITE_BACKEND_URL

const SiteStats = () => {
  const [userCount, setUserCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    fetch(`${URL}api/v1/getUsers`)
    .then(res => res.json())
    .then(data => setUserCount(data))

    fetch(`${URL}api/v1/getGalleries`)
    .then(res => res.json())
    .then(data => setGalleryCount(data.length))

    fetch(`${URL}api/v1/getComments`)
    .then(res => res.json())
    .then(data => setCommentCount(data.length))

    fetch(`${URL}api/v1/getPosts`)
    .then(res => res.json())
    .then(data => setPostCount(data.length))

  }, []);
console.log()

  return ( 
    <div>
      <h2>Users: {userCount}</h2>
      <h2>Galleries: {galleryCount}</h2>
      <h2>Comments: {commentCount}</h2>
      <h2>Posts: {postCount}</h2>
    </div>
  );
}

export default SiteStats;