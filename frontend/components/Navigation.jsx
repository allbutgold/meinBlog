import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Navigation.module.scss'
import Logo from '../src/assets/Logo.png'
import './Navigation.css'

const Navigation = (props) => {
  const location = useLocation()
  /* const user = useContext(UserContext) */
  return (
    <section className={styles.Navigation}>
      <Link to='/'> 
        <img src={Logo} style={{ left: 0}} alt="" />
      </Link>
      
      <nav className={styles.navBar}>
        <NavLink className={location.pathname === '/' ? 'active' : ''} to='/'>HOME</NavLink>
        {/* { user.role === 'admin' && <Link to='/adminPage'>Admin</Link>} */}
        {/* <NavLink className={location.pathname === 'blog/' ? 'active' : ''} to='/blog'>BLOG</NavLink> */}
        <NavLink className={location.pathname === '/galleries' ? 'active' : ''} to='/galleries'>GALLLERY</NavLink>
        {/* <Link to='/contact'>Contact</Link> */}
        <NavLink className={location.pathname === '/adminPage' ? 'active' : ''} to='/adminPage'>LOGIN</NavLink>
        {/* <button onClick={() => {props.setuser({})}}></button> */}
      </nav>
  </section>
  )

} 

export default Navigation