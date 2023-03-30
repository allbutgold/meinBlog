import styles from './BlogEintrag.module.scss'

const BlogEintrag = ({ post }) => {
  return (
    <div className={styles.BlogEintrag}>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <img src={`http://localhost:9999/${post.postImage}`} />
    </div>
  )
}

export default BlogEintrag