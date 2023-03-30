import styles from '../components/BlogPreview.module.scss'
import { Link } from 'react-router-dom'


const BlogEintrag = ({ post }) => {
  return (
    <Link to={"/blogdetailpage/" + post.id}>
      <div className={styles.BlogPreview}>
      <h2>{post.title}</h2>
      <img src={`http://localhost:9999/${post.postImage}`} />


    </div>
    </Link>

  )
}

export default BlogEintrag