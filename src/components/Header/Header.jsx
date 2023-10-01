import { NavLink } from "react-router-dom"
import { Nav } from './Header.styled';

const Header = () => {
  return (
    <Nav>
      <div>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="movies">
          Movies
        </NavLink>
      </div>
    </Nav>
  )
}

export default Header