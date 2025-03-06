import { NavLink } from "react-router";

function Navigation() {
    return (
      <nav className="navbar flex justify-around p-3">
        <NavLink to="/">Home here</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contactme">Contact</NavLink>
      </nav>
    )
  }
  
  export default Navigation;
  