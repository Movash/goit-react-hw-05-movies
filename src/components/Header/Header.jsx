import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="movies">
          Movies
        </NavLink>
      </div>
    </nav>
  )
}

export default Header