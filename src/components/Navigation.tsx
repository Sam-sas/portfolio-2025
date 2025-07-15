import { NavLink } from "react-router";

function Navigation() {
  const navStyle = "text-base md:text-xl lg:text-2xl px-2 mb-4";
    return (
      <nav className="navbar flex justify-around p-2 bg-dark-blue text-burnt-orange">
        <NavLink to="/" className={navStyle}>Home</NavLink>
        <NavLink to="/about" className={navStyle}>About</NavLink>
        <NavLink to="/projects" className={navStyle}>Projects</NavLink>
        <NavLink to="/contactme" className={navStyle}>Contact</NavLink>
      </nav>
    )
  }
  
  export default Navigation;
  