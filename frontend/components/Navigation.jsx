import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <section>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/adminPage'>Admin</Link>
      </nav>
  </section>
  )

} 

export default Navigation