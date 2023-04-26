import {Link} from 'react-router-dom'
import styles from './Navigation.module.scss'
import Logo from '../src/assets/Logo.png'

const Navigation = (props) => {
  /* const user = useContext(UserContext) */
  return (
    <section className={styles.Navigation}>
      <img src={Logo} style={{ left: 0}} alt="" />
      <nav>
        <Link to='/'>Home</Link>
        {/* { user.role === 'admin' && <Link to='/adminPage'>Admin</Link>} */}
        <Link to='/blog'>Blog</Link>
        {/* <Link to='/contact'>Contact</Link> */}
        <Link to='/adminPage'>Login</Link>
        {/* <button onClick={() => {props.setuser({})}}></button> */}
      </nav>
  </section>
  )

} 

export default Navigation