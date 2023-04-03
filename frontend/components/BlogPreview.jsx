import styles from '../components/BlogPreview.module.scss'
import { Link } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL

const BlogEintrag = ({ post }) => {
  return (
    <Link to={"/blogdetailpage/" + post.id}>
      <div className={styles.BlogPreview}>
      <h2>{post.title}</h2>
      <img src={`${API_URL}/${post.postImage}`} />


    </div>
    </Link>

  )
}

export default BlogEintrag