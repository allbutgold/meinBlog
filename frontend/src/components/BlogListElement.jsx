import { useEffect } from "react";
import BlogEintrag from "../components/BlogEintrag.jsx";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const BlogListElement = ({ setPosts, posts }) => {
  useEffect(() => {
    fetch(`${API_URL}api/v1/getPosts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  if (!posts) return;
  // console.log(posts)
  return (
    <div>
      {posts.map((post) => {
        return <BlogEintrag key={post._id} post={post} />;
      })}
    </div>
  );
};

export default BlogListElement;
