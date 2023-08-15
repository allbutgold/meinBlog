import { NavLink, Link, useLocation } from "react-router-dom"
import { useState } from "react"
import styles from "../components/Scss/Navigation.module.scss"
import LoginStatus from "./LoginStatus"
import LogoutButton from "./Logout"
import Logo from "../assets/Logo.png"
import "./Navigation.css"

const Navigation = (props) => {
  const [LoginActive, setLoginActive] = useState(false)
  const location = useLocation()
  /* const user = useContext(UserContext) */
  return (
    <section className={styles.Navigation}>
      <Link to='/'>
        <img src={Logo} style={{ left: 0 }} alt='' />
      </Link>

      <nav className={styles.navBar}>
        <NavLink className={location.pathname === "/" ? "active" : ""} to='/'>
          HOME
        </NavLink>
        {/* { user.role === 'admin' && <Link to='/adminPage'>Admin</Link>} */}

        <NavLink
          className={location.pathname === "/codingprojects" ? "active" : ""}
          to='/codingprojects'
        >
          PROJECTS
        </NavLink>
        <NavLink
          className={location.pathname === "/galleries" ? "active" : ""}
          to='/galleries'
        >
          PHOTOS
        </NavLink>
        <NavLink
          className={location.pathname === "blog/" ? "active" : ""}
          to='/blog'
        >
          BLOG
        </NavLink>
        {/* <Link to='/contact'>Contact</Link> */}
        <NavLink
          className={location.pathname === "/adminPage" ? "active" : ""}
          to='/adminPage'
        >
          LOGIN
        </NavLink>
        {/* <button onClick={() => {props.setuser({})}}></button> */}
      </nav>
      {/* <div>
        <LoginStatus LoginActive={LoginActive} />
        <LogoutButton setLoginActive={setLoginActive} />
      </div> */}
    </section>
  )
}

export default Navigation
