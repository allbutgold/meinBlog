import {Link} from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <section className={styles.Navigation}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/adminPage'>Admin</Link>
      </nav>
  </section>
  )

} 

export default Navigation