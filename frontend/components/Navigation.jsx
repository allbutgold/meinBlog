import {Link} from 'react-router-dom'
import styles from './Navigation.module.scss'
import Logo from '../src/assets/Logo.png'

const Navigation = () => {
  return (
    <section className={styles.Navigation}>
      <img src={Logo} style={{ left: 0}} alt="" />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/adminPage'>Admin</Link>
      </nav>
  </section>
  )

} 

export default Navigation