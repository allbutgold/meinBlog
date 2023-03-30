const BlogEintrag = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>\
      <p>{post.text}</p>
      <img src={`http://localhoste:9999${post.posImage}`} />
    </div>
  )
}

export default BlogEintrag