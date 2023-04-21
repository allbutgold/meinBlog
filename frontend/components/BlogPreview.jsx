import styles from '../components/BlogPreview.module.scss'
import { Link } from 'react-router-dom'

const API_URL = import.meta.env.VITE_BACKEND_URL

const BlogEintrag = ({ post }) => {
  return (
    <Link key={post._id} to={"/blogdetailpage/" + post._id}>
      <div className={styles.BlogPreview}>
      <h2>{post.title}</h2>
      <img src={`${API_URL}${post.image}`} />
    </div>
    </Link>

  )
}

export default BlogEintrag