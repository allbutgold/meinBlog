import styles from './BlogEintrag.module.scss'


const BlogEintrag = ({ post }) => {
  return (
    <div className={styles.BlogEintrag}>
      <h2>{post.title}</h2>
      <img src={`http://localhost:9999/${post.postImage}`} />
      <p>{post.text}</p>

    </div>
  )
}

export default BlogEintrag