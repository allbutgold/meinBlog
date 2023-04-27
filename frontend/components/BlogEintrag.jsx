import styles from './BlogEintrag.module.scss'
import { Link } from 'react-router-dom'

const API_URL = import.meta.env.VITE_BACKEND_URL

const BlogEintrag = ({ post }) => {
  return (
    <div className={styles.BlogEintrag}>
      <h2>{post.title}</h2>
      <img src={`${API_URL}${post.image}`} />
      <p>{post.text}</p>
      <Link to='/blog'>Back</Link>
    </div>
  )
}

export default BlogEintrag