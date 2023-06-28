import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogEintrag from "../components/BlogEintrag";
import AddComment from "../components/AddComment";

const BlogDetailPage = () => {
  const [posts, setPosts] = useState();
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${API_URL}api/v1/getPosts/${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  if (!posts) return;

  return (
    <div>
      <BlogEintrag post={posts} />
      <AddComment />
    </div>
  );
};

export default BlogDetailPage;
